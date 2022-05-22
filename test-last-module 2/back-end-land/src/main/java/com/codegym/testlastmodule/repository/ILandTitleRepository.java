package com.codegym.testlastmodule.repository;

import com.codegym.testlastmodule.model.LandTitle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILandTitleRepository extends JpaRepository<LandTitle,Integer> {
    Page<LandTitle> findAllByAreaContaining(String area, Pageable pageable);
}
