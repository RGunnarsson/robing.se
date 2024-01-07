package com.robin.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

@SpringBootApplication
public class RestServiceApplication {

	public static void main(String[] args) {

		//SpringApplication.run(RestServiceApplication.class, args);
		SpringApplication app = new SpringApplication(RestServiceApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", 80));
		app.run(args);
	}

}
