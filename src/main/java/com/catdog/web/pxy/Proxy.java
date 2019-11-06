package com.catdog.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
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
	private boolean existPrev,existNext;
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
		
		int blockCount = pageCount % BLOCK_SIZE == 0 ? (pageCount / BLOCK_SIZE):((pageCount / BLOCK_SIZE) + 1); //count 는 총수?
		int blockNum = (pageNum -1) / BLOCK_SIZE; //num 인덱스 넘버? 그래서 0부터 시작?
		int startPage = blockNum * BLOCK_SIZE + 1;
		int endPage = (blockNum + 1 != blockCount) ? startPage + BLOCK_SIZE - 1 : pageCount;
		existPrev = blockNum != 0;
//      트루 펄스면 3항은 이것처럼 생략할 수 있음 . boolean existPrev = (blockNum != 0)? true : false;
		existNext = blockNum + 1 != blockCount;
//		boolean existNext = (blockNum + 1 != blockCount)? true : false;
	}
	public int parseInt(String param) {
		Function<String,Integer> f = s -> Integer.parseInt(s);
		return f.apply(param);
	}
	
	
	public void accept(Map<?,?> paramMap) {
		String pageNum = (String) paramMap.get("");
	}

	public int random(int a,int b) {
		BiFunction<Integer, Integer, Integer> f = (t,u) ->(int)(Math.random()*(u-t)+t) ;
		return f.apply(a,b);
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
	
	public static void main(String[] args) {
		try {
			Document rawData = Jsoup.connect("https://music.bugs.co.kr/chart").timeout(10*1000).get();
			  Elements artist = rawData.select("p[class=artist]"); 
			  Elements title = rawData.select("p[class=title]"); 
			  List<String> artist2 = new ArrayList<>();
			  List<String> title2 = new ArrayList<>();
			  for(Element e : artist) {
				  artist2.add(e.text());
			  }
			  for(Element e : title) {
				  title2.add(e.text());
			  }
			  System.out.println(artist2); 
			  System.out.println("---------------");
			  System.out.println(title2); 

		} catch (Exception e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
	}
	

}
