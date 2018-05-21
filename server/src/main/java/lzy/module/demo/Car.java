package lzy.module.demo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lzy.common.entity.BaseIdEntity;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.Date;

/**
 * User: longzhiyou
 * Date: 2017/11/8
 * Time: 13:32
 */
@Where(clause="delete_flag=0")
@NoArgsConstructor
@EqualsAndHashCode(callSuper=true)
@Data
@Entity
public class Car extends BaseIdEntity {

    private String carNum;

}