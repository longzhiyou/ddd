package lzy.module.demo;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * User: longzhiyou
 * Date: 2017/11/9
 * Time: 11:54
 */
public interface BookRepository extends JpaRepository<Book, Integer> {
}
