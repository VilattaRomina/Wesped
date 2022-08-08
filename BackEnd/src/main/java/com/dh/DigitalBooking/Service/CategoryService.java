package com.dh.DigitalBooking.Service;

import com.dh.DigitalBooking.Model.Category;
import com.dh.DigitalBooking.Repository.CategoryRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private static final Logger logger = Logger.getLogger(CategoryService.class);
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    //TODO
    public Category addNew(Category category) {
        return null;
    }

    //TODO
    public List<Category> listAll() {
        return null;
    }
}
