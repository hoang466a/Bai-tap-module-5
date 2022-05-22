package com.codegym.testlastmodule.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;


@Entity
public class Category {
    @Id
    private int idCategory;
    private String nameCategory;

    @OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<LandTitle>landTitleSet;



    public Category() {
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
}
