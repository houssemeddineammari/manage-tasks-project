package com.hea.helloWorld.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.hea.bean.Hello;

@CrossOrigin(origins="*")
@RestController
public class HelloController {
	
	@GetMapping(path="/hello-bean")
	public Hello HelloBean() {
		//return new Hello("Hello Houssem");
		throw new RuntimeException("An error occured !please contact the **** support");
	}
	
	@GetMapping(path="/hello-with-param/{param}")
	public String HelloWithParam(@PathVariable String param) {
		return "Hello " + param;
	}
	
	@GetMapping(path="/hello-bean-param/{name}")
	public Hello HelloBeanWithVariable(@PathVariable String name) {
		return new Hello(String.format("Hello %s", name));
	}
	
	

	

}
