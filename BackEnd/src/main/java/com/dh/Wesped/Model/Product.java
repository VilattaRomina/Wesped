package com.dh.Wesped.Model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private Double longitude;
    private Double latitude;
    private Double rating;
    private Boolean availability;
    @JsonIncludeProperties(value = {"id"})
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "categories_id")
    private Category category;
    @JsonIncludeProperties(value = {"id"})
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "cities_id")
    private City city;
    /*Si agregamos este atributo, el endpoint de Productos retorna el json de imagenes
    @JsonIncludeProperties(value = {"id"})
    @OneToMany(mappedBy = "product")
    private Set<Image> images = new HashSet<>();*/
    @JsonIncludeProperties(value = {"id"})
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "product_has_features",
            joinColumns = {@JoinColumn(name = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "features_id")})
    private Set<Feature> features = new HashSet<>();
    @JsonIncludeProperties(value = {"id"})
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "product_has_policy",
            joinColumns = {@JoinColumn(name = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "policy_id")})
    private Set<Policy> policies = new HashSet<>();

    public Product() {
    }

    public Product(String title, String description, Double longitude, Double latitude, Double rating, Boolean availability, Category category, City city, Set<Feature> features, Set<Policy> policies) {
        this.title = title;
        this.description = description;
        this.longitude = longitude;
        this.latitude = latitude;
        this.rating = rating;
        this.availability = availability;
        this.category = category;
        this.city = city;
        this.features = features;
        this.policies = policies;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", longitude=" + longitude +
                ", latitude=" + latitude +
                ", rating=" + rating +
                ", availability=" + availability +
                ", category=" + category +
                ", city=" + city +
                ", features=" + features +
                ", policies=" + policies +
                '}';
    }
}