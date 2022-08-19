package com.dh.DigitalBooking.Model;
import javax.persistence.*;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "city")
@Getter
@Setter
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @Column
    private String name;

    @NotNull
    @Column
    private String country;

    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY, orphanRemoval = true)

    private Set<Product> products = new HashSet<>();

    public City() {
    }

    public City(Integer id, String name, String country, Set<Product> products) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.products = products;
    }


    @Override
    public String toString() {
        return "City{" +
                "id=" + id +
                ", title='" + name + '\'' +
                ", country='" + country + '\'' +
                '}';
    }



}
