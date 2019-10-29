package com.catdog.web.brd;

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
import com.catdog.web.utl.Printer;

@RestController
@RequestMapping("/articles")
public class ArticleCtl {
	public static Logger logger = LoggerFactory.getLogger(ArticleCtl.class);
	@Autowired Map<String,Object> map;
	@Autowired Article article;
	@Autowired Printer printer;
	@Autowired ArticleMapper articleMapper;
	@Autowired List<Article> list;
	
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param){
		printer.accept("Ctl 로 들어옴");
		printer.accept("cid:"+param.getCid());
		param.setBoardType("게시판");
		IConsumer<Article> c = t->articleMapper.insertArticle(t);
		c.accept(param);
		
		//<> 제네릭이 파라미터 타입임! 왜냐? consumer 니깐
		map.clear();
		map.put("msg","success");
		ISupplier<Integer> s =()->  articleMapper.countArtseq();
		map.put("count",s.get());
		return map;
	}
	@GetMapping("/") //겟매핑에서 아무것도 없으면 전체를 가져와라
	public List<Article> list(){
		list.clear();  // 람다는 청소하고 담아야함!
		ISupplier<List<Article>> s =()-> articleMapper.selectAll();
		printer.accept("전체글목록\n"+s.get());
		return s.get();
			
	}
	
	@GetMapping("/count") //겟매핑에서 아무것도 없으면 전체를 가져와라
	public Map<?,?> countBrd() {  //아티클에 속성이 없음, 대게 답이 없으면 map
		ISupplier<Integer> s =()->  articleMapper.countArtseq();
		printer.accept("카운터가 뭐냐?"+s);
		map.clear();
		map.put("count",s.get());
		return map;
	}
	
	@GetMapping("/{articleseq}")
	public Article read(@PathVariable String articleseq,@RequestBody Article param) {
		
		return null;
	}
	@PutMapping("/{articleseq}")
	public Article update(@PathVariable String articleseq, @RequestBody Article param) {
		return null;
	}
//	@DeleteMapping("/{articleseq}")
//	public Map<?,?> delete(@PathVariable String articleseq, @RequestBody Article param) {
//		IConsumer<Article> c = new IConsumer<Article>() {
//			
//			@Override
//			public void accept(Article t) {
//				// TODO Auto-generated method stub
//				
//			}
//		};
//		return null;
//	}
	@DeleteMapping("/{articleseq}")
	public Map<?,?> delete(@PathVariable String articleseq, @RequestBody Article param) {
		IConsumer<Article> c =  t -> articleMapper.deleteArticle(t);
		c.accept(param);
		map.clear();
		map.put("msg","success");
		return map;
	}

}
