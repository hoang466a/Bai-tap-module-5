package com.codegym.testlastmodule.service;

import com.codegym.testlastmodule.model.LandTitle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ILandTitleService {
    Page<LandTitle> findAll(Pageable pageable);
    LandTitle findById(Integer id);
    void save(LandTitle employee);
    Page<LandTitle> findAllByArea(String area, Pageable pageable);
    void deleteById(Integer id);
    Page<LandTitle> findByEmployeeId(Integer id, Pageable pageable);
}
