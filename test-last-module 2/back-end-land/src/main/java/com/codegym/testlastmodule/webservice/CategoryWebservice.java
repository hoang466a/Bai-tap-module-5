package com.codegym.testlastmodule.webservice;

import com.codegym.testlastmodule.model.Category;
import com.codegym.testlastmodule.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/category")
@CrossOrigin
public class CategoryWebservice {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping(value="")
    public ResponseEntity<List<Category>> goList(){
        List<Category>findAll=iCategoryService.findAllList();
        return new ResponseEntity<>(findAll, HttpStatus.OK);
    }



}
