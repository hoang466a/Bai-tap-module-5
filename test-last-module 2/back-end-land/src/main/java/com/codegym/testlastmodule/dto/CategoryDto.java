package com.codegym.testlastmodule.dto;


import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class CategoryDto implements Validator {
    private int idCategory;
    private String nameCategory;

    public CategoryDto() {
    }

    public int getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
    }

    public String getNameCategory() {
        return nameCategory;
    }

    public void setNameCategory(String nameCategory) {
        this.nameCategory = nameCategory;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
