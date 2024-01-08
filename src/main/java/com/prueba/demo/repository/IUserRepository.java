package com.prueba.demo.repository;

import com.prueba.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer>{
    Optional<User> findByUsernameOrEmail(String username, String email);
}
