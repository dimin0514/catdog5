package com.catdog.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.catdog.web.brd.ArticleMapper;
import com.catdog.web.cmm.ISupplier;
import com.catdog.web.utl.Printer;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, startRow, endRow;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired Printer printer;
	@Autowired ArticleMapper articleMapper;
	
	@SuppressWarnings("unused")
	public void paging() {
		ISupplier<String> s = ()->articleMapper.countArtseq();
		int totalCount = Integer.parseInt(s.get());
		int pageCount = totalCount % pageSize == 0 ? 
					(totalCount / pageSize):((totalCount / pageSize) + 1);
		startRow = pageSize*(pageNum-1);
		endRow = (pageNum == pageCount) ? totalCount -1 : startRow +pageSize -1;
		
		int blockCount = pageCount/BLOCK_SIZE+1;
		int blockNum = (pageNum -1) / BLOCK_SIZE;
		int startPage = (totalCount/pageSize/BLOCK_SIZE-1)*BLOCK_SIZE+1;
		int endPage = 0;
		boolean existPrev = false;
		boolean existNext = false;
		 
	}
	public int parseInt(String param) {
		Function<String,Integer> f = s -> Integer.parseInt(s);
		return f.apply(param);
	}
	
	
	public void accept(Map<?,?> paramMap) {
		String pageNum = (String) paramMap.get("");
	}

	
	public List<?> crwal(Map<?,?> paramMap){
		List<String> proxyList = new ArrayList<>();
		String url = "http://"+paramMap.get("site")+"/";
		printer.accept("넘어온 url\n"+url);
		try {
			Connection.Response response = Jsoup.connect(url).method(Connection.Method.GET).execute();
			Document document = response.parse();
			String text = document.html();
//			String text = document.text();
			printer.accept("크롤링한 텍스트\n"+text);
			proxyList.add(text);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return proxyList;
	}
	


}
