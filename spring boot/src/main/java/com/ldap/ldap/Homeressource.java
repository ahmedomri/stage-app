package com.ldap.ldap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class Homeressource {
@GetMapping("/")
public String index() {
	return "home page";
}


@GetMapping(path = "/basicauth")
public boolean auth() {
	
	return new Boolean(true);
}


@RequestMapping(value="/greeting",method = RequestMethod.GET)
public boolean hh() {
	
	return new Boolean(true);
}

}
