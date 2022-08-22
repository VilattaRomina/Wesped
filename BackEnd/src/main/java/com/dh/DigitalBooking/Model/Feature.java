package com.dh.DigitalBooking.Model;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;


@Entity
@Table (name = "feature")
@Getter
@Setter
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String icon;
    @ManyToMany(mappedBy = "features")

    private List<Product> products;

    public Feature() {
    }

    public Feature(Long id, String title, String icon, Product product) {
        this.id = id;
        this.title = title;
        this.icon = icon;
    }

    @Override
    public String toString() {
        return "Feature{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", icon='" + icon + '\'' +
                '}';
    }

}
