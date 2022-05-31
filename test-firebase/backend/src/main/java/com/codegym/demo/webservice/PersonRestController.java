package com.codegym.demo.webservice;


import com.codegym.demo.model.Person;
import com.codegym.demo.service.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value="/person")
public class PersonRestController {
    @Autowired
    IPersonService iPersonService;


@GetMapping(value="")
public ResponseEntity<List<Person>>listPerson(){
List<Person>listPersonData=iPersonService.findAll();
return new ResponseEntity<>(listPersonData, HttpStatus.OK);
    }


@PostMapping(value="")
public ResponseEntity<Void> createPerson(@RequestBody Person person){
    this.iPersonService.save(person);
    return new ResponseEntity<>(HttpStatus.OK);
}}
