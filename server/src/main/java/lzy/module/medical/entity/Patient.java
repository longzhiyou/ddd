package lzy.module.medical.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lzy.module.person.entity.PersonEntity;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * 病人
 * User: longzhiyou
 * Date: 2018/5/21
 * Time: 17:30
 */
@Where(clause="delete_flag=0")
@NoArgsConstructor
@EqualsAndHashCode(callSuper=true)
@Data
@Entity
public class Patient extends PersonEntity {

    @Id
    @GenericGenerator(name = "idGenerator", strategy = "lzy.common.entity.IdGenerator")
    @GeneratedValue(generator = "idGenerator")
    private Long patientId;
}
