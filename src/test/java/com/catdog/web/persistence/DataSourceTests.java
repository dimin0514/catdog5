package com.catdog.web.persistence;

import static org.junit.Assert.fail;

import java.sql.Connection;

import javax.sql.DataSource;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

import com.catdog.web.cfg.RootConfig;

import lombok.extern.log4j.Log4j;

import lombok.Setter;


@ContextConfiguration(classes= {RootConfig.class})
@Log4j
public class DataSourceTests {
	@Setter(onMethod_ = { @Autowired })
	private DataSource dataSource;
	@Test
	public void  testConnection() {
		try (Connection con = dataSource.getConnection()){
			System.out.println("성공");
			log.info(con);
			
		} catch (Exception e) {
			System.out.println("실패");
			fail(e.getMessage());
		}
	}
}
