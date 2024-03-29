package com.robin.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

import java.util.Collections;

@EnableCaching
@SpringBootApplication
public class RestServiceApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(RestServiceApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", 8080));
		app.run(args);
	}

}
