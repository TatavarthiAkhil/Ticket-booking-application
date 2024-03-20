import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  '../components/Book.css';

const ViewBooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div>
            <h1>View Bookings</h1>
            <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Departure</th>
                        <th>Departure Time</th>
                        <th>Arrival</th>
                        <th>Arrival Time</th>
                        <th>Gender</th>
                        <th>Price</th>
                        <th>Date</th>
                        
                    </tr>
              
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.departure}</td>
                            <td>{book.departureTime}</td>
                            <td>{book.arrival}</td>
                            <td>{book.arrivalTime}</td>
                            <td>{book.gender}</td>
                            <td>{book.price}</td>
                            <td>{book.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewBooksPage;


