package com.inventory.inventorytool.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer ITSequence = 0;

    private String itemIdentifier;

    // One-To-One mapping with Item

    // One-To-Many with Item Tasks

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
}
