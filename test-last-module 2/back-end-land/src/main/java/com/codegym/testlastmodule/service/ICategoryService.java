package com.codegym.testlastmodule.service;

import com.codegym.testlastmodule.model.Category;
import com.codegym.testlastmodule.model.LandTitle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICategoryService {
    Page<Category> findAll(Pageable pageable);
    Category findById(Integer id);
    void save(Category employee);

}
