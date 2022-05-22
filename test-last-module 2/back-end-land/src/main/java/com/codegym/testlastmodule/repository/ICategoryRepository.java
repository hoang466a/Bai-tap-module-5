package com.codegym.testlastmodule.repository;

import com.codegym.testlastmodule.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Integer> {

}
