package com.catdog.web.cus;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
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
	@PostMapping("/login")
	public Customer login(@RequestBody Customer param){
		IFunction<Customer,Customer> f = o-> customerMapper.selectById(param);
		
		return f.apply(param);
	}

}
