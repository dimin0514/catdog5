package com.catdog.web.cus;


import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer customer);
	public Customer selectById(Customer customer);
}
