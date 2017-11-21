package lzy.module.demo.domain;

import lzy.module.demo.Book;
import lzy.module.demo.BookDetail;
import lzy.module.demo.BookRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * User: longzhiyou
 * Date: 2017/11/9
 * Time: 11:55
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@Transactional
public class BookRepositoryTest {
    private static final Logger logger = LoggerFactory.getLogger(BookRepositoryTest.class);


    @Autowired
    private BookRepository bookRepository;

    @Test
    @Rollback(false)
    public void findBook(){

        // fetch all books
        for (Book book : bookRepository.findAll()) {
            logger.info(book.toString());
        }
    }
    @Test
    @Rollback(false)
    public void init(){
        // save a couple of books
        List<Book> books = new ArrayList<>();
        books.add(new Book("Book A", new BookDetail(49)));
//        books.add(new Book("Book B", new BookDetail(59)));
//        books.add(new Book("Book C", new BookDetail(69)));
        bookRepository.save(books);

    }

    @Test
    @Rollback(false)
    public void deleteBook(){
        bookRepository.delete(5);
    }

}