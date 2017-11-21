package lzy.sys.security;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * User: longzhiyou
 * Date: 2017/10/25
 * Time: 11:43
 */
@Component
public class WebMvcConfigurer extends WebMvcConfigurerAdapter {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000","*")
                .allowedMethods("GET","POST","OPTIONS","PUT","DELETE");
    }
}