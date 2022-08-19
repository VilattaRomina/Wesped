package com.dh.DigitalBooking.Controller;

import com.dh.DigitalBooking.Exceptions.BadRequestException;

import com.dh.DigitalBooking.Model.Product;
import com.dh.DigitalBooking.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
