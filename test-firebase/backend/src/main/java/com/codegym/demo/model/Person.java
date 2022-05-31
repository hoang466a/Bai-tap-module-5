package com.codegym.demo.model;
import javax.persistence.*;
@Entity
public class Person {
    @Id
    @GeneratedValue
    private Integer id;
    private String imgUrl;

    String changeValue(int a){
        return null;
    }
    double changeValue(int b,int c){
        return 0;
    }




    public Person(Integer id, String imgUrl) {
        this.id = id;
        this.imgUrl = imgUrl;
    }

    public Person() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
