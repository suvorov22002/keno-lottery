package com.pyramid.keno.lottery.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Suvorov Vassilievitch
 * Date: 06/08/2024
 * Time: 13:49
 * Project Name: keno-lottery
 */
@Controller
public class KenoController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showWelcomePage(ModelMap model) {
        System.out.println("Controller Here");
        model.put("partner", "RAMATBET");
        return "index";
    }

    @RequestMapping(value = "/keno", method = RequestMethod.GET)
    public String showKenoPage(ModelMap model) {
        System.out.println("Controller Here");
        model.put("partner", "RAMATBET");
        return "index";
    }
}
