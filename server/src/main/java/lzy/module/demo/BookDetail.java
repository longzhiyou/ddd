package lzy.module.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.io.Serializable;

/**
 * User: longzhiyou
 * Date: 2017/11/9
 * Time: 11:53
 */
@Data
@Entity
public class BookDetail  implements Serializable {

    @Id
    @OneToOne
    private Book book;
    private Integer numberOfPages;

    public BookDetail(){

    }

    public BookDetail(Integer numberOfPages){
        this.numberOfPages = numberOfPages;
    }

}
