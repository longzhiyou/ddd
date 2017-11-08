package lzy.domain;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * User: longzhiyou
 * Date: 2017/11/8
 * Time: 11:10
 */
public interface UserRepository extends JpaRepository<User, Long> {
}
