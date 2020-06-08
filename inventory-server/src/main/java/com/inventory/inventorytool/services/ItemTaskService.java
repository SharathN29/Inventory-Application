package com.inventory.inventorytool.services;

import com.inventory.inventorytool.domain.Backlog;
import com.inventory.inventorytool.domain.ItemTask;
import com.inventory.inventorytool.exceptions.ItemNotFoundException;
import com.inventory.inventorytool.repositories.BacklogRepository;
import com.inventory.inventorytool.repositories.ItemRepository;
import com.inventory.inventorytool.repositories.ItemTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ItemTaskRepository itemTaskRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemService itemService;

    public ItemTask addItemTask(String itemIdentifier, ItemTask itemTask, String username) {

        // Exception : when item is not found

        Backlog backlog = itemService.findItemByIdentifier(itemIdentifier, username).getBacklog(); //backlogRepository.findByItemIdentifier(itemIdentifier);
        itemTask.setBacklog(backlog);

        Integer BacklogSequence = backlog.getITSequence();
        BacklogSequence++;
        backlog.setITSequence(BacklogSequence);

        itemTask.setItemSequence(itemIdentifier + "-" + BacklogSequence);
        itemTask.setItemIdentifier(itemIdentifier);

        if (itemTask.getPriority() == null || itemTask.getPriority() == 0) {
            itemTask.setPriority(3);
        }

        if (itemTask.getStatus() == "" || itemTask.getStatus() == null) {
            itemTask.setStatus("TO_DO");
        }

        return itemTaskRepository.save(itemTask);


    }

    public Iterable<ItemTask> findBacklogById(String id, String username) {

        itemService.findItemByIdentifier(id, username);
        return itemTaskRepository.findByItemIdentifierOrderByPriority(id);
    }

    public ItemTask findITByItemSequence(String backlog_id, String it_id, String username) {

        itemService.findItemByIdentifier(backlog_id, username);

        ItemTask itemTask = itemTaskRepository.findByItemSequence(it_id);
        if (itemTask == null) {
            throw new ItemNotFoundException("Item task '" + it_id + "' not found");
        }

        if (!itemTask.getItemIdentifier().equals(backlog_id)) {
            throw new ItemNotFoundException("Item task '" + it_id + "' does not exist in item : '" + backlog_id);
        }

        return itemTask;
    }

    public ItemTask updateByItemSequence(ItemTask updatedTask, String backlog_id, String it_id, String username) {

        ItemTask itemTask = findITByItemSequence(backlog_id, it_id, username);
        itemTask = updatedTask;
        return itemTaskRepository.save(itemTask);
    }

    public void deleteITByItemSequence(String backlog_id, String it_id, String username) {

        ItemTask itemTask = findITByItemSequence(backlog_id, it_id, username);
        itemTaskRepository.delete(itemTask);
    }
}
