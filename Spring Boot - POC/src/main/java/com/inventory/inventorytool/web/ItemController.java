package com.inventory.inventorytool.web;

import com.inventory.inventorytool.domain.Item;
import com.inventory.inventorytool.services.ItemService;
import com.inventory.inventorytool.services.MapValidationErrorService;
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
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewItem(@Valid @RequestBody Item item, BindingResult result) {

        ResponseEntity<?> errorMap= mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Item item1 = itemService.saveOrUpdateItem(item);
        return new ResponseEntity<Item>(item, HttpStatus.CREATED);
    }
}
