package com.codegym.demo.service;

import com.codegym.demo.model.Person;

import java.util.List;

public interface IPersonService {
    void save(Person person);
    void delete(int id);
    List<Person> findAll();

}
