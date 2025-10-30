package com.mohit.controller;

import com.mohit.model.User;
import com.mohit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    public User createUser(@RequestBody User user) throws Exception {

        User isExist = userRepository.findByEmail(user.getEmail());
        if (isExist!= null){
            throw new Exception("User exists with "+user.getEmail());
        }
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    @DeleteMapping ("/users/{userId}")
    public String deleteUser(@PathVariable Long userId) throws Exception{
        userRepository.deleteById(userId);
        return "User deleted successfully";
    }

    @GetMapping("/users")
    public List<User> getAllUsers() throws Exception{
        List<User> users = userRepository.findAll();
        return users;
    }

}
