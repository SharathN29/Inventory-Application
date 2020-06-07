package com.inventory.inventorytool.repositories;

import com.inventory.inventorytool.domain.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {

    Item findByItemIdentifier(String itemId);

    @Override
    Iterable<Item> findAll();

    Iterable<Item> findAllByItemOrderCreator(String username);
}
