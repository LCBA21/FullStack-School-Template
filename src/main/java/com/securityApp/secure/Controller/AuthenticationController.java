package com.securityApp.secure.Controller;

import com.securityApp.secure.Models.AuthenticationRequest;
import com.securityApp.secure.Service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {


    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/authenticate")
    private String authenticateUser(@RequestBody AuthenticationRequest request){
        return authenticationService.authenticate(request);
    }
}
