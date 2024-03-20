package com.cap.ticketbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cap.ticketbooking.entity.Book;



@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
