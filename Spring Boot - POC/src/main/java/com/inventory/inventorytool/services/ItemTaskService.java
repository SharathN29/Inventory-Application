package com.inventory.inventorytool.services;

import com.inventory.inventorytool.domain.Backlog;
import com.inventory.inventorytool.domain.Item;
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

    public ItemTask addItemTask(String itemIdentifier, ItemTask itemTask) {

        // Exception : when item is not found

        try {
            Backlog backlog = backlogRepository.findByItemIdentifier(itemIdentifier);
            itemTask.setBacklog(backlog);

            Integer BacklogSequence = backlog.getITSequence();
            BacklogSequence++;
            backlog.setITSequence(BacklogSequence);

            itemTask.setItemSequence(itemIdentifier+"-"+BacklogSequence);
            itemTask.setItemIdentifier(itemIdentifier);

            if(itemTask.getPriority() == null) {
                itemTask.setPriority(3);
            }

            if(itemTask.getStatus() == "" || itemTask.getStatus() == null) {
                itemTask.setStatus("TO_DO");
            }

            return itemTaskRepository.save(itemTask);
        } catch (Exception e) {
            throw new ItemNotFoundException("Item Not Found");
        }

    }

    public Iterable<ItemTask> findBacklogById(String id) {

        Item item = itemRepository.findByItemIdentifier(id);
        if(item == null) {
            throw new ItemNotFoundException("Item with ID: '"+id+"' does not exist");
        }
        return itemTaskRepository.findByItemIdentifierOrderByPriority(id);
    }

    public ItemTask findITByItemSequence(String backlog_id, String it_id) {

        Backlog backlog = backlogRepository.findByItemIdentifier(backlog_id);
        if(backlog == null) {
            throw new ItemNotFoundException("Item with ID: '"+backlog_id+"' does not exist");
        }

        ItemTask itemTask = itemTaskRepository.findByItemSequence(it_id);
        if(itemTask == null) {
            throw new ItemNotFoundException("Item task '"+it_id+"' not found");
        }

        if(!itemTask.getItemIdentifier().equals(backlog_id)) {
            throw new ItemNotFoundException("Item task '" + it_id +"' does not exist in item : '" + backlog_id);
        }

        return itemTask;
    }

    public ItemTask updateByItemSequence(ItemTask updatedTask, String backlog_id, String it_id) {

        ItemTask itemTask = findITByItemSequence(backlog_id, it_id);
        itemTask = updatedTask;
        return itemTaskRepository.save(itemTask);
    }

    public void deleteITByItemSequence(String backlog_id, String it_id) {

        ItemTask itemTask = findITByItemSequence(backlog_id, it_id);
        itemTaskRepository.delete(itemTask);
    }
}
