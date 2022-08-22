package com.dh.Wesped.Controller;

import com.dh.Wesped.Exceptions.BadRequestException;
import com.dh.Wesped.Model.Product;
import com.dh.Wesped.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/products")

public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> productRegister(@RequestBody Product product) {
        return ResponseEntity.ok(productService.save(product));
    }

    @GetMapping
    public ResponseEntity<List<Product>> listAll() {
        return ResponseEntity.ok(productService.listAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable Integer id) throws BadRequestException {
        return ResponseEntity.ok(productService.findById(id));
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<?>> getAllProductsByCategoryId(@PathVariable Integer categoryId) {
        return ResponseEntity.ok(productService.filterByCategory(categoryId));
    }

    @GetMapping("/city/{cityId}")
    public ResponseEntity<List<?>> getAllProductsByCityId(@PathVariable Integer cityId) {
        return ResponseEntity.ok(productService.filterByCity(cityId));
    }
}