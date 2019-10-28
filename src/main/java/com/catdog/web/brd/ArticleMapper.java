package com.catdog.web.brd;

import org.springframework.stereotype.Repository;

import com.catdog.web.cus.Customer;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param);
	public Customer selectCustomerById(Article param);
	public int existId(String cid);
	public int lastCNum();

}
