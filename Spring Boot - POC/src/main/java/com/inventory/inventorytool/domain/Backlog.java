package com.inventory.inventorytool.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer ITSequence = 0;

    private String itemIdentifier;

    // One-To-One mapping with Item
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "item_id", nullable = false)
    @JsonIgnore
    private Item item;

    // One-To-Many with Item Tasks
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "backlog", orphanRemoval = true)
    private List<ItemTask> itemTasks = new ArrayList<>();

    public Backlog() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getITSequence() {
        return ITSequence;
    }

    public void setITSequence(Integer ITSequence) {
        this.ITSequence = ITSequence;
    }

    public String getItemIdentifier() {
        return itemIdentifier;
    }

    public void setItemIdentifier(String itemIdentifier) {
        this.itemIdentifier = itemIdentifier;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public List<ItemTask> getItemTasks() {
        return itemTasks;
    }

    public void setItemTasks(List<ItemTask> itemTasks) {
        this.itemTasks = itemTasks;
    }
}
