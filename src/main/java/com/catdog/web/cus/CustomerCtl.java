package com.catdog.web.cus;

import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.catdog.web.utl.Printer;

import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/customer")

public class CustomerCtl {
	public static Logger logger = LoggerFactory.getLogger(CustomerCtl.class);
	@Autowired Map<String,Object> map;
	@Autowired Customer customer;
	@Autowired Printer printer;

	@PostMapping("/")   //파라미터가 앖으면 create? 아무것도 없으면 집어넣어라. 파리마티거 있으면 get 아이디가 있으면 가져와라! 로그인 조인 이런거 안씀 아이디 유무
	public Customer join(@RequestBody Customer param) {  //리쿼스트 바디 리스판스 바디!!!
//		logger.info("AJAX가 보낸 아이디 와 비번 pname{}",param.getCid()+","+param.getPwd()+","+param.getPname());
		printer.accept("람다 프린터로 출력한값"+param.getCid()+","+param.getPwd());
		customer.setCid(param.getCid());
		customer.setPwd(param.getPwd());
		customer.setPname(param.getPname());
		logger.info("조인에서 에 담긴 사용자정보",customer.getCid()+","+customer.getPwd()+","+customer.getPname());
		return customer;
	}
	@PostMapping("/login")
	public Customer login(@RequestBody Customer param){
		logger.info("AJAX가 보낸 아이디 와 비번{}",param.getCid()+","+param.getPwd());
		customer.setCid(param.getCid());
		customer.setPwd(param.getPwd());
		customer.setPname(param.getPname());
		logger.info("customer 에 담긴 사용자정보{}",customer.toString());
		return customer;
	}

}
