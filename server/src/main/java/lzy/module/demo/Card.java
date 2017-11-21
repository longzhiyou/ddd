package lzy.module.demo;

import lombok.Data;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.Date;

/**
 * User: longzhiyou
 * Date: 2017/11/8
 * Time: 11:08
 */
@Data
@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String card_num;
    private Date createAt;


}
