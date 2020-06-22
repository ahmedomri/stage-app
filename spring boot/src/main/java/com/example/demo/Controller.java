package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.minidev.json.JSONObject;

@RestController
public class Controller {
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/users",method = RequestMethod.GET)
	public User user(@RequestParam String username,@RequestParam String password) {
		User a=new User(username,password);
		System.out.println(a.toString());
		return a;
	}
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/auth",method = RequestMethod.GET)
	public boolean auth(@RequestParam String username,@RequestParam String password) {
		User a=new User(username,password);
		System.out.println(a.toString());
		return new Boolean(true);
	}
	
	
	

}
