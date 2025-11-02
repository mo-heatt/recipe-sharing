package com.mohit.service;

import com.mohit.model.User;

public interface UserService {
    public User findUserById(Long userId) throws Exception;
}
