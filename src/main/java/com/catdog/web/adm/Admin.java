package com.catdog.web.adm;

import org.springframework.stereotype.Component;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Admin{
	private String aid,pwd,ssn,creditcard,pname,phone,address,email;

}
