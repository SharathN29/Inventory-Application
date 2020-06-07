package com.inventory.inventorytool.web;

import com.inventory.inventorytool.domain.Item;
import com.inventory.inventorytool.services.ItemService;
import com.inventory.inventorytool.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/api/item")
@CrossOrigin
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewItem(@Valid @RequestBody Item item, BindingResult result, Principal principal) {

        ResponseEntity<?> errorMap= mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Item item1 = itemService.saveOrUpdateItem(item, principal.getName());
        return new ResponseEntity<Item>(item1, HttpStatus.CREATED);
    }

    @GetMapping("/{itemId}")
    public ResponseEntity<?> getItemById(@PathVariable String itemId, Principal principal) {
        Item item = itemService.findItemByIdentifier(itemId, principal.getName());
        return new ResponseEntity<Item>(item, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Item> getAllItems(Principal principal) {
        return itemService.findAllItems(principal.getName());
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<?> deleteItem(@PathVariable String itemId, Principal principal) {
        itemService.deleteItemByIdentifier(itemId, principal.getName());
        return new ResponseEntity<String>("Item with ID: '" + itemId +"' was deleted Successfully", HttpStatus.OK);
    }
}
