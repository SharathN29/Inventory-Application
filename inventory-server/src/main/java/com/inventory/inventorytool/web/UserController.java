package com.inventory.inventorytool.web;

import com.inventory.inventorytool.domain.User;
import com.inventory.inventorytool.services.MapValidationErrorService;
import com.inventory.inventorytool.services.UserService;
import com.inventory.inventorytool.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {

        userValidator.validate(user, result);

        ResponseEntity<?> errMap = mapValidationErrorService.MapValidationService(result);
        if(errMap != null) return errMap;

        User newUser = userService.saveUser(user);

        return new ResponseEntity<User>(newUser,HttpStatus.CREATED);
    }
}
