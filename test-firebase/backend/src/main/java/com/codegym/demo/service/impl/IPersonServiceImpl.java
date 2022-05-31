package com.codegym.demo.service.impl;

import com.codegym.demo.model.Person;
import com.codegym.demo.repository.IPersonRepository;
import com.codegym.demo.service.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IPersonServiceImpl implements IPersonService {
    @Autowired
    IPersonRepository iPersonRepository;
    @Override
    public void save(Person person) {
        iPersonRepository.save(person);
    }

    @Override
    public void delete(int id) {
        iPersonRepository.deleteById(id);
    }

    @Override
    public List<Person> findAll() {
        return iPersonRepository.findAll();
    }
}
