package lzy.module.customer.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lzy.module.person.entity.PersonEntity;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
public class Customer extends PersonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;
    private String name;

}