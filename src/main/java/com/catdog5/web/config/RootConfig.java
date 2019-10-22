package com.catdog5.web.config;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@MapperScan(basePackages = {"com.catdog5.web"})
@ComponentScan(basePackages = {"com.catdog5.web"})
public class RootConfig {
	@Bean
	public DataSource dataSource() {
		HikariConfig hikariConfig = new HikariConfig();
		hikariConfig.setDriverClassName("com.mysql.jdbc.Driver");
		hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/catdog?serverTimezone=UTC");
		hikariConfig.setUsername("catdog");
		hikariConfig.setPassword("catdog");
		
		
		HikariDataSource dataSource = new HikariDataSource(hikariConfig);
		return dataSource;
	}

}
