package com.lym.app1.lymserver1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@SpringBootApplication
@RestController
public class LymServer1Application {

    public static void main(String[] args) {
        SpringApplication.run(LymServer1Application.class, args);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getID")
    public String getID(@RequestParam(value = "name", defaultValue = "World") String MyName) {
        return String.format("1");
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getName")
    public String getName(@RequestParam(value = "id", defaultValue = "123") String myID) {
        System.out.println("id is :" + myID);
        if (myID.equals('1')) {
            return String.format("xiaomin");
        } else {
            return "wrong ID!";
        }

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getEmail")
    public String getEmail(@RequestParam(value = "name", defaultValue = "World") String MyName) {
        System.out.println("name is :"+MyName);
        return String.format("xiaomin@citrix.com");
    }

}
