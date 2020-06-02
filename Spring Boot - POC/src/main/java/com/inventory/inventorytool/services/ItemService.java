package com.inventory.inventorytool.services;

import com.inventory.inventorytool.domain.Item;
import com.inventory.inventorytool.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Item saveOrUpdateItem(Item item) {
        return itemRepository.save(item);
    }
}
