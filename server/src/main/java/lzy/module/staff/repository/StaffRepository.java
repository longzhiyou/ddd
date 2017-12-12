package lzy.module.staff.repository;

import lzy.module.staff.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface StaffRepository extends JpaRepository<Staff, Long> {

    @Modifying
    @Query("update Staff t set t.deleteFlag = 1 where t.staffId = ?1")
    @Override
    void delete(Long id);


}
