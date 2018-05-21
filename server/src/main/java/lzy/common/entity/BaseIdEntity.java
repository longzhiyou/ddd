package lzy.common.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;



/**
 *
 * 快速实现时使用此类,默认主键名称都是id
 * [2017-01-16 add by longzhiyou]
 */

@MappedSuperclass
@EqualsAndHashCode(callSuper=true)
@Data
public abstract class BaseIdEntity  extends BaseEntity {

	@Id
	@GenericGenerator(name = "idGenerator", strategy = "lzy.common.entity.IdGenerator")
	@GeneratedValue(generator = "idGenerator")
	private Long id;

}
