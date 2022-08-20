package com.dh.DigitalBooking.Service;

import com.dh.DigitalBooking.Exceptions.BadRequestException;
import com.dh.DigitalBooking.Exceptions.ResourceNotFoundException;
import com.dh.DigitalBooking.Model.Product;
import com.dh.DigitalBooking.Repository.ProductRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private static final Logger logger = Logger.getLogger(CategoryService.class);
    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product save(Product product) {
        logger.debug("Guardando nuevo producto: "+ product);
        return productRepository.save(product);
    }

    public List<Product> listAll() {
        logger.debug("Encontramos estos productos: ");
        return productRepository.findAll();
    }

    public Product findById(Integer id) throws BadRequestException {

        logger.debug("Buscando producto con: " +id);

        if (productRepository.findById(id).isEmpty()) {
            logger.debug("No se encontro producto con id " + id);
            throw new BadRequestException("No se encontro producto con id " + id);
        } else {
            logger.debug("Se encontro producto con id: ");
            return productRepository.findById(id).get();
        }

    }



}
