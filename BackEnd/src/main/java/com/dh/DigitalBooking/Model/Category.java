package com.dh.DigitalBooking.Model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private String urlImage;

    @OneToMany(mappedBy = "category",fetch = FetchType.LAZY, orphanRemoval = true)
    private Set<Product> products = new HashSet<>();

    public Category() {

    }

    public Category(String title, String description, String urlImage) {
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
    }



    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", urlImage='" + urlImage + '\'' +
                '}';
    }
}