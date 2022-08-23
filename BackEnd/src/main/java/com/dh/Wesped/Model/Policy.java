package com.dh.Wesped.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "policy")
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    @JsonIgnore
    @ManyToMany(mappedBy = "policies", fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();

    public Policy() {
    }

    public Policy(String title, String description, Set<Product> products) {
        this.title = title;
        this.description = description;
        this.products = products;
    }

    @Override
    public String toString() {
        return "Policy{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", products=" + products +
                '}';
    }
}

