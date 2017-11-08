package lzy.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * User: longzhiyou
 * Date: 2017/11/8
 * Time: 13:32
 */
@Data
@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String carNum;

    private Date createAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}