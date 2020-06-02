package com.inventory.inventorytool.exceptions;

public class ItemIdExceptionResponse {

    private String itemIdentifier;

    public ItemIdExceptionResponse(String itemIdentifier) {
        this.itemIdentifier = itemIdentifier;
    }

    public String getItemIdentifier() {
        return itemIdentifier;
    }

    public void setItemIdentifier(String itemIdentifier) {
        this.itemIdentifier = itemIdentifier;
    }
}
