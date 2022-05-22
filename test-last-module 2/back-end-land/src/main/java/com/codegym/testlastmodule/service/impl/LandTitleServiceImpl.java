package com.codegym.testlastmodule.service.impl;

import com.codegym.testlastmodule.model.LandTitle;
import com.codegym.testlastmodule.repository.ICategoryRepository;
import com.codegym.testlastmodule.repository.ILandTitleRepository;
import com.codegym.testlastmodule.service.ILandTitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class LandTitleServiceImpl implements ILandTitleService {
    @Autowired
    ICategoryRepository iCategoryRepository;
    @Autowired
    ILandTitleRepository iLandTitleRepository;

    @Override
    public Page<LandTitle> findAll(Pageable pageable) {
        return iLandTitleRepository.findAll(pageable);
    }

    @Override
    public LandTitle findById(Integer id) {
        return iLandTitleRepository.findById(id).orElse(null);
    }

    @Override
    public void save(LandTitle landTitle) {
        iLandTitleRepository.save(landTitle);
    }

    @Override
    public Page<LandTitle> findAllByArea(String area, Pageable pageable) {
        return iLandTitleRepository.findAllByAreaContaining(
                area,pageable);
    }

    @Override
    public void deleteById(Integer id) {
        iLandTitleRepository.deleteById(id);
    }

    @Override
    public Page<LandTitle> findByEmployeeId(Integer id, Pageable pageable) {
        return null;
    }
}
