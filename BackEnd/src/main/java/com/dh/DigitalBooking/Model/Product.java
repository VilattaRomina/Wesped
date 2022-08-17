package com.dh.DigitalBooking.Model;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Column
    private String title;
    @NotNull
    @Column
    private String description;
    @Column
    private String latitude;
    @Column
    private String longitude;
    @NotNull
    @Column
    private String rating;
    @Column
    private Boolean availability;


    //category
    @ManyToOne( fetch = FetchType.LAZY)
    @JoinColumn(name="category_id")
    private Category category;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
            name="product_has_features",
            joinColumns = @JoinColumn(name="product_id"),
            inverseJoinColumns = @JoinColumn(name="feature_id"))
            private Set<Feature> features;

    //city
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="city_id")
    private City city;


    public Product(String title, String description, String latitude, String longitude, String rating, Boolean availability, Category category, City city, Set<Feature> features) {
        this.title = title;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.rating = rating;
        this.availability = availability;
        this.category = category;
        this.city = city;
        this.features = features;
    }
}

