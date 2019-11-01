package com.catdog.web.brd;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.catdog.web.cus.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy @Data 
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Article {
	private String articleseq, image, cid, title, content, comments, msg, rating, boardType;

}
