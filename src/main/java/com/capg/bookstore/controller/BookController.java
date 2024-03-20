package com.capg.bookstore.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.aspectj.weaver.patterns.ParserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.capg.bookstore.entity.Book;
import com.capg.bookstore.service.BookService;



@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3009")
public class BookController {
	
    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @PostMapping("/save")
    public Book addBook(@RequestBody Book book) {
        return bookService.saveBook(book);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book bookDetails) throws IOException, ParseException {
        Book book = bookService.getBookById(id);
        if (book == null) {
            return null; 
        }
        book.setName(bookDetails.getName());
        book.setDeparture(bookDetails.getDeparture());
        book.setArrival(bookDetails.getArrival());
        book.setGender(bookDetails.getGender());
        book.setPrice(bookDetails.getPrice());
        book.setDate(bookDetails.getDate());
        book.setDepartureTime(bookDetails.getDepartureTime());
        book.setArrivalTime(bookDetails.getArrivalTime());
      
        
        return bookService.saveBook(book);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        Book book = bookService.getBookById(id);
        if (book == null) {
            return ResponseEntity.notFound().build();
        }
        bookService.deleteBook(id);
        return ResponseEntity.ok().build();
    }
}
