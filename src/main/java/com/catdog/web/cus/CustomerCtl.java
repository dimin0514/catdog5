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
import com.catdog.web.cmm.IPredicate;
import com.catdog.web.cmm.ISupplier;
import com.catdog.web.utl.Printer;

import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/customers")

public class CustomerCtl {
	public static Logger logger = LoggerFactory.getLogger(CustomerCtl.class);
	@Autowired Map<String,Object> map;
	@Autowired Customer customer;
	@Autowired Printer printer;
	@Autowired CustomerMapper customerMapper;
	
	@GetMapping("/{cid}/exist")
	public Map<?, ?> existId(@PathVariable String cid){
		System.out.println("중복진입");
		IFunction<String,Integer> f = t -> customerMapper.existId(cid);
		map.clear();
		map.put("msg",(f.apply(cid)==0) ? "SUCCESS":"FAIL");
		return map;
	}

	@PostMapping("/")  
	public Map<?,?> join(@RequestBody Customer param) {  
		printer.accept("로그인으로 들어옴:"+param.toString());
		IConsumer<Customer> c= t->customerMapper.insertCustomer(t);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	@PostMapping("/{cid}")
	public Customer login(@PathVariable String cid, @RequestBody Customer param){
		IFunction<Customer,Customer> f = o-> customerMapper.selectCustomerById(param);
		return f.apply(param);  
	}
	@GetMapping("/{cid}")
	public Customer searchCustomerById(@PathVariable String cid, @RequestBody Customer param) {
		IFunction<Customer,Customer> f = o-> customerMapper.selectCustomerById(param);
		return f.apply(param);
	}

	@PutMapping("/{cid}")
	public Map<?,?> updateCustomer(@PathVariable String cid, @RequestBody Customer param) {
		IConsumer<Customer> c= t->customerMapper.insertCustomer(t);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	@DeleteMapping("/{cid}")
	public Map<?,?> removeCustomer(@PathVariable String cid, @RequestBody Customer param) {
		IConsumer<Customer> c= t->customerMapper.insertCustomer(t);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

}
