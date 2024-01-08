package com.prueba.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController
{
    @GetMapping("/login")
    public String login()
    {
        return "login";
    }

    @GetMapping("/admin")
    public String admin()
    {
        return "admin";
    }

    @GetMapping("/user")
    public String user()
    {
        return "user";
    }

    @GetMapping("/logout")
    public String logout()
    {return "redirect:/login";
    }
}
