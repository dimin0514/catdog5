package com.catdog.web.brd;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.catdog.web.cmm.IConsumer;
import com.catdog.web.cmm.ISupplier;
import com.catdog.web.pxy.Proxy;
import com.catdog.web.pxy.ProxyMap;
import com.catdog.web.utl.Printer;

@RestController
@RequestMapping("/articles")
public class ArticleCtl {
	public static Logger logger = LoggerFactory.getLogger(ArticleCtl.class);
	@Autowired Article article;
	@Autowired Printer printer;
	@Autowired ArticleMapper articleMapper;
	@Autowired List<Article> list;
	@Autowired Proxy pxy;
	@Autowired ProxyMap map;
	
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param){
		printer.accept("Ctl 로 들어옴");
		printer.accept("cid:"+param.getCid());
		param.setBoardType("게시판");
		IConsumer<Article> c = t->articleMapper.insertArticle(t);
		c.accept(param);
		
		//<> 제네릭이 파라미터 타입임! 왜냐? consumer 니깐
//		map.clear();
//		map.put("msg","success");
		ISupplier<String> s =()->  articleMapper.countArtseq();
		map.accept(Arrays.asList("msg","count"),Arrays.asList("SUCCESS",s.get()));
		return map.get();
	}
	@GetMapping("/page/{pageNo}/size/{pageSize}") //겟매핑에서 아무것도 없으면 전체를 가져와라
	public Map<?,?> list(@PathVariable String pageNo, @PathVariable String pageSize){
		pxy.setPageNum(pxy.parseInt(pageNo));
		pxy.setPageSize(pxy.parseInt(pageSize));
		pxy.paging();
		list.clear();  // 람다는 청소하고 담아야함!
		ISupplier<List<Article>> s =()-> articleMapper.selectAll(pxy);
		printer.accept("해당페이지 넘버\n"+s.get());
		int ran = pxy.random(18, 17);
		printer.accept("랜덤수는?"+ran);
		map.accept(Arrays.asList("articles","pages","pxy"), Arrays.asList(s.get(),Arrays.asList(1,2,3,4,5),pxy));
//		map.accept(Arrays.asList("articles","pages","proxy"), Arrays.asList(s.get(),Arrays.asList(1,2,3,4,5),pxy)) 담아서 바로js로 보낼 수 있음!;
		
//		map.put("articles",s.get());
//		map.put("pages",Arrays.asList(1,2,3,4,5));
		return map.get();
	}
//	@GetMapping("/") //겟매핑에서 아무것도 없으면 전체를 가져와라
//	public List<Article> list(){
//		list.clear();  // 람다는 청소하고 담아야함!
//		ISupplier<List<Article>> s =()-> articleMapper.selectAll();
//		printer.accept("전체글목록\n"+s.get());
//		return s.get();
//	}
	
	@GetMapping("/count") //겟매핑에서 아무것도 없으면 전체를 가져와라
	public Map<?,?> countBrd() {  //아티클에 속성이 없음, 대게 답이 없으면 map
		ISupplier<String> s =()->  articleMapper.countArtseq();
		printer.accept("카운터가 뭐냐?"+s);
		map.accept(Arrays.asList("count"), Arrays.asList(s.get()));
//		map.clear();
//		map.put("count",s.get());
//		return map;
		return map.get();
	}
	
	@GetMapping("/{articleseq}")
	public Article readArticle(@PathVariable String articleseq) {
		ISupplier<Article> c = ()-> articleMapper.selectArticle(articleseq);
		article = c.get();
		return article;
	}
	@PutMapping("/{articleseq}")
	public Article updateArticle(@PathVariable String articleseq, @RequestBody Article param) {
		list.clear();
		IConsumer<Article> c =  t -> articleMapper.modify(param);
		c.accept(param);
		ISupplier<Article> d = ()-> articleMapper.selectArticle(articleseq);
		article = d.get();
		return article;
	}

	@DeleteMapping("/{articleseq}")
	public Map<?,?> delete(@PathVariable String articleseq, @RequestBody Article param) {
//		map.clear();
		IConsumer<Article> c =  t -> articleMapper.deleteArticle(param);
		c.accept(param);
//		map.clear();
//		map.put("msg","success");
		map.accept(Arrays.asList("msg"), Arrays.asList("success"));
		return map.get();
	}

}
