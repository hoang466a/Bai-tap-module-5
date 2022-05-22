package com.codegym.testlastmodule.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class LandTitle {
    @Id
    @GeneratedValue
    private Integer id;
    private String local;
    private String level;
    private String titleType;
    private String status;
    private String address;
    private String area;
    private String direction;
    private String title;
    private String content;
    private String price;
    private Boolean priceCheck;
    private String imageUrl;
    private Date datePost;
    @ManyToOne
    @JoinColumn(name="id_category",referencedColumnName = "idCategory")
    private Category category;

    public LandTitle() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getTitleType() {
        return titleType;
    }

    public void setTitleType(String titleType) {
        this.titleType = titleType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Boolean getPriceCheck() {
        return priceCheck;
    }

    public void setPriceCheck(Boolean priceCheck) {
        this.priceCheck = priceCheck;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getDatePost() {
        return datePost;
    }

    public void setDatePost(Date datePost) {
        this.datePost = datePost;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
