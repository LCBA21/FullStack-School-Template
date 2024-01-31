package com.securityApp.secure.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendPassword(String to, String password){


        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setTo(to);
        mailMessage.setSubject("User Login Details:");

        mailMessage.setText(" Password:  " + password
                            +"  Username : "  +to);

        javaMailSender.send(mailMessage);
    }
}
