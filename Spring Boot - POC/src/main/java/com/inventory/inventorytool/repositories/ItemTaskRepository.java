package com.inventory.inventorytool.repositories;

import com.inventory.inventorytool.domain.ItemTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemTaskRepository extends CrudRepository<ItemTask, Long> {

    List<ItemTask> findByItemIdentifierOrderByPriority(String id);

    ItemTask findByItemSequence(String sequence);
}
