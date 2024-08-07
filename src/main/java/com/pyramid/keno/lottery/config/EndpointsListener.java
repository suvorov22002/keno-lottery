package com.pyramid.keno.lottery.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

/**
 * Created by Suvorov Vassilievitch
 * Date: 06/08/2024
 * Time: 17:54
 * Project Name: keno-lottery
 */

public class EndpointsListener implements ApplicationListener<ContextRefreshedEvent> {
    Logger LOGGER = LoggerFactory.getLogger(EndpointsListener.class);
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        ApplicationContext applicationContext = event.getApplicationContext();
        applicationContext.getBean(RequestMappingHandlerMapping.class).getHandlerMethods()
                .forEach((key, value) -> LOGGER.info("{} {}", key, value));
    }

}
