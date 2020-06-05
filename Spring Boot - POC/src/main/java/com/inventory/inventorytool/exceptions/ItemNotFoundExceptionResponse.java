package com.inventory.inventorytool.exceptions;

public class ItemNotFoundExceptionResponse {
    private String ItemNotFound;

    public ItemNotFoundExceptionResponse(String itemNotFound) {
        ItemNotFound = itemNotFound;
    }

    public String getItemNotFound() {
        return ItemNotFound;
    }

    public void setItemNotFound(String itemNotFound) {
        ItemNotFound = itemNotFound;
    }
}
