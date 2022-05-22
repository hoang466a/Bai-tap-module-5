package com.codegym.testlastmodule.webservice;


import com.codegym.testlastmodule.model.LandTitle;
import com.codegym.testlastmodule.service.ILandTitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
@RequestMapping(value = "/landTitle")
@CrossOrigin
public class LandTitleWebservice {
    @Autowired
    private ILandTitleService iLandTitleService;

    @GetMapping(value="")
    public ResponseEntity<Page<LandTitle>> goListLandTitle
            (@PageableDefault(value = 3, sort = "id", direction = Sort.Direction.ASC)Pageable pageable,
             @RequestParam Optional<String> keyword){
        String keywordValue=keyword.orElse("");
        Page<LandTitle> landTitleList=iLandTitleService.findAllByArea(keywordValue,pageable);
        return new ResponseEntity<>(landTitleList, HttpStatus.OK);
    }

}
