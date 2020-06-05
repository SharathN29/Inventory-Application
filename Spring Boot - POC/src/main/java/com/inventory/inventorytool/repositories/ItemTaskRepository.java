package com.inventory.inventorytool.repositories;

import com.inventory.inventorytool.domain.ItemTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemTaskRepository extends CrudRepository<ItemTask, Long> {
}
