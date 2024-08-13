package com.pyramid.keno.lottery.controller;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Suvorov Vassilievitch
 * Date: 06/08/2024
 * Time: 13:49
 * Project Name: keno-lottery
 */
@Controller
public class KenoController {

    @Value("${app.service.url}")
    private String URL;
    @RequestMapping(value = "/{partner}/room/{room}", method = RequestMethod.GET)
    public String showWelcomePage(ModelMap model, HttpServletRequest request,
                                  @PathVariable("partner") String partner, @PathVariable("room") String room) {
    //    System.out.println("Controller Here: " + room);
        model.put("partner", partner);
        model.put("room", room);
        model.put("contextPath", request.getContextPath());
        model.put("UrlService", URL);
        model.put("game", "KENO");
        return "index";
    }

    @RequestMapping(value = "/keno", method = RequestMethod.GET)
    public String showKenoPage(ModelMap model) {
        model.put("partner", "RAMATBET");
        return "index";
    }
}
