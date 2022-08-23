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
@Table(name = "features")
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String icon;
    @JsonIgnore
    @ManyToMany(mappedBy = "features", fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();

    public Feature() {
    }

    public Feature(String title, String icon, Set<Product> products) {
        this.title = title;
        this.icon = icon;
        this.products = products;
    }

    @Override
    public String toString() {
        return "Feature{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", icon='" + icon + '\'' +
                ", products=" + products +
                '}';
    }
}
