package com.securityApp.secure.Controller;

import com.securityApp.secure.Models.User;
import com.securityApp.secure.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UsersService usersService;


    @DeleteMapping("/deleteUser/{userName}")
    public String deleteUser(@PathVariable String userName){

        return  usersService.deleteUser(userName);

//
//        User user = usersService.findUserByUserName(userName);
//        for(Role role : user.getRole()) {
//            if(!role.getAuthority().equals("ROLE_USER") ) {
//                usersService.deleteUser(userName);
//            }
//        }
//        return  "Successful failed";
    }







}
