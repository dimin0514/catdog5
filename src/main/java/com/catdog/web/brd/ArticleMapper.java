package com.catdog.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.catdog.web.cus.Customer;
import com.catdog.web.pxy.Proxy;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param);
	public String countArtseq();
	public List<Article> selectAll(Proxy pxy);
	public Article selectArticle(String articleseq);
	public void deleteArticle(Article param);
	public void modify(Article param);

}
