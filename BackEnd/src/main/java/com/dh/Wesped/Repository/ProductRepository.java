package com.dh.Wesped.Repository;

import com.dh.Wesped.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByCategoryId(Integer category_id);

    List<Product> findByCityId(Integer city_id);
}