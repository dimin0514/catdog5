package com.catdog.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.catdog.web.cus.Customer;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param);
	public int countArtseq();
	public List<Article> selectAll();
	public Article selectArticle(String articleseq);
	public void deleteArticle(Article param);
	public void modify(Article param);

}
