package lzy.module.demo;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * User: longzhiyou
 * Date: 2017/11/8
 * Time: 11:10
 */
public interface CardRepository extends JpaRepository<Card, Long> {
}