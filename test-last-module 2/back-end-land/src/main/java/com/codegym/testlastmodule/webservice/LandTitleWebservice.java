package com.codegym.testlastmodule.webservice;


import com.codegym.testlastmodule.dto.LandTitleDto;
import com.codegym.testlastmodule.model.Category;
import com.codegym.testlastmodule.model.LandTitle;
import com.codegym.testlastmodule.service.ICategoryService;
import com.codegym.testlastmodule.service.ILandTitleService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/landTitle")
@CrossOrigin
public class LandTitleWebservice {
    @Autowired
    private ILandTitleService iLandTitleService;


    @GetMapping(value = "")
    public ResponseEntity<Page<LandTitle>> goListLandTitle
            (@PageableDefault(value = 3, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
             @RequestParam Optional<String> keyword) {
        String keywordValue = keyword.orElse("");
        Page<LandTitle> landTitleList = iLandTitleService.findAllByArea(keywordValue, pageable);
        return new ResponseEntity<>(landTitleList, HttpStatus.OK);
    }

    @PostMapping(value = "")
    public ResponseEntity<Map<String, String>> createLandTitle(@Valid @RequestBody LandTitleDto landTitleDto,
                                                               BindingResult bindingResult) {
        Map<String,String> mapErrors=null;
        landTitleDto.validate();

        if (bindingResult.hasFieldErrors()) {
            mapErrors = bindingResult.getFieldErrors().stream().collect(Collectors.toMap(e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(mapErrors, HttpStatus.BAD_REQUEST);
        }
        Category category=new Category();
        LandTitle landTitle=new LandTitle();
        BeanUtils.copyProperties(landTitleDto,landTitle);
        BeanUtils.copyProperties(landTitleDto.getCategory(),category);
        landTitle.setCategory(category);
        iLandTitleService.save(landTitle);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
