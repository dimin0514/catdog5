package com.catdog.web.cus;


import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer param);
	public Customer selectCustomerById(Customer param);
	public int existId(String cid);
	public int lastCNum();
}
