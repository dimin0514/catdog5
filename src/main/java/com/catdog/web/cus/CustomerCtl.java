package com.catdog.web.cus;

import java.util.HashMap;
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
import com.catdog.web.cmm.IFunction;
import com.catdog.web.utl.Printer;

import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/customer")

public class CustomerCtl {
	public static Logger logger = LoggerFactory.getLogger(CustomerCtl.class);
	@Autowired Map<String,Object> map;
	@Autowired Customer customer;
	@Autowired Printer printer;
	@Autowired CustomerMapper customerMapper;

	@PostMapping("/")  
	public String join(@RequestBody Customer param) {  
		logger.info("AJAX가 보낸 아이디 와 비번 pname{}",param.getCid()+","+param.getPwd()+","+param.getPname());
		
		IConsumer<Customer> c= t->customerMapper.insertCustomer(t);
		c.accept(param);
		
			
		
		return "SUCCESS";
	}
	@PostMapping("/{cid}")
	public Customer login(@RequestBody Customer param){
		IFunction<Customer,Customer> f = o-> customerMapper.selectById(param);
		return f.apply(param);
	}
	@GetMapping("/{cid}")
	public Customer searchCustomerById(@PathVariable String cid, @RequestBody Customer param) {
		IFunction<Customer,Customer> f = o-> customerMapper.selectById(param);
		return f.apply(param);
	}

	@PutMapping("/{cid}")
	public String updateCustomer(@PathVariable String cid, @RequestBody Customer param) {
		IConsumer<Customer> c= t->customerMapper.insertCustomer(t);
		c.accept(param);
		return "SUCCESS";
	}
	@DeleteMapping("/{cid}")
	public String removeCustomer(@PathVariable String cid, @RequestBody Customer param) {
		IConsumer<Customer> c= t->customerMapper.insertCustomer(t);
		c.accept(param);
		return "SUCCESS";
	}

}
