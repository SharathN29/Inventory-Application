package com.inventory.inventorytool.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ItemIdException extends RuntimeException {

    public ItemIdException(String message) {
        super(message);
    }
}
