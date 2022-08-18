package com.dh.DigitalBooking.Model;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "policy")
@Getter
@Setter
@NoArgsConstructor
public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long id;
    @Column
    private String title;
    @Column
    private String description;

    @ManyToMany(mappedBy = "policies",fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();
}

