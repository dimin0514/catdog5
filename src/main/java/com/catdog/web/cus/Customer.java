package com.catdog.web.cus;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data 
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Customer{
	private String cid,pwd,ssn,creditcard,pname,phone,address,email;


}
