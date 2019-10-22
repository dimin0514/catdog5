package com.catdog.web.adm;

import org.springframework.stereotype.Component;

import com.catdog.web.cus.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Admin{
	private String cid,pwd,ssn,creditcard,pname,phone,address,email;

}
