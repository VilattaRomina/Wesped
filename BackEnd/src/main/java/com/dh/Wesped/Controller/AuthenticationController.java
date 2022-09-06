package com.dh.Wesped.Controller;

import com.dh.Wesped.Model.Role;
import com.dh.Wesped.Model.User;
import com.dh.Wesped.Payload.ApiResponse;
import com.dh.Wesped.Payload.JwtAuthenticationResponse;
import com.dh.Wesped.Payload.Login;
import com.dh.Wesped.Payload.SignUp;
import com.dh.Wesped.Repository.UserRepository;
import com.dh.Wesped.Security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JwtTokenProvider tokenProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody Login login) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        login.getEmail(),
                        login.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUp signUp) {

        if (userRepository.existsByEmail(signUp.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Este correo ya esta en uso"),
                    HttpStatus.BAD_REQUEST);
        }

        User user = new User(signUp.getName(), signUp.getSurname(),
                signUp.getEmail(), signUp.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCity("null");

        Role userRole = new Role("user");
        userRole.setId(2);
        user.setRole(userRole);

        User createdUser = userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true, "Usuario registrado exitosamente"));
    }
}