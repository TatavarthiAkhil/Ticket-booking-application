import React, { useState } from 'react';
import axios from 'axios';

const cityOptions = [
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'New Delhi', label: 'New Delhi' },
  // Add more cities as needed
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const UpdateBookPage = () => {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState({
    name: '',
    departure: '',
    departureTime: '',
    arrival: '',
    arrivalTime: '',
    gender: '',
    price: '',
    date: ''
    
  });
  const [errors, setErrors] = useState({});

  const handleIdChange = async (e) => {
    const { value } = e.target;
    setBookId(value);
    if (value) {
      try {
        const response = await axios.get(`http://localhost:8080/api/books/${value}`);
        const fetchedBook = response.data;
        setBook({
          name: fetchedBook.name,
          departure: fetchedBook.departure,
          departureTime: fetchedBook.departureTime,
          arrival: fetchedBook.arrival,
          arrivalTime: fetchedBook.arrivalTime,
          gender: fetchedBook.gender,
          price: fetchedBook.price,
          date: fetchedBook.date
        });
      } catch (error) {
        console.error('Error fetching book:', error);
        // Optionally, handle error
      }
    } else {
      // Clear the book details if bookId is empty
      setBook({
        name: '',
        departure: '',
        departureTime: '',
        arrival: '',
        arrivalTime: '',
        gender: '',
        price: '',
        date: ''
      });
    }
  };

  const handleUpdateBook = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!book.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(book.name.trim())) {
      newErrors.name = 'Name should only contain letters';
    }
    if (!book.departure.trim()) {
      newErrors.departure = 'Departure is required';
    }
    if (!book.arrival.trim()) {
      newErrors.arrival = 'Arrival is required';
    }
    if (!book.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }
   
    if (!book.date.trim()) {
      newErrors.date = 'Date is required';
    } else if (!isValidDate(book.date.trim())) {
      newErrors.date = 'Date should be in the format YYYY-MM-DD';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8080/api/books/${bookId}`, book);
      console.log('Ticket updated successfully:', response.data);
      // Show success alert
      alert('Ticket updated successfully');
      // Optionally, display a success message or redirect to another page
    } catch (error) {
      console.error('Error updating Ticket:', error);
      // Optionally, display an error message
    }
  };

  const isValidDate = (dateString) => {
    // Check if the dateString is in the format YYYY-MM-DD
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(dateString);
  };

  return (
    <div id="Book_Container">
      <h1 id="form_heading">Update Details</h1>
      <form id="form" onSubmit={handleUpdateBook}>
        <div>
          <label id="formlabel_1">Ticket ID:</label><br/>
          <input type="text" className='forminputtype' value={bookId} onChange={handleIdChange} />
        </div>
        <div>
          <label>Name:</label><br/>
          <input
            type="text"
            className={errors.name ? 'forminputtype error' : 'forminputtype'}
            value={book.name}
            onChange={(e) => setBook({ ...book, name: e.target.value })}
          />
          {errors.name && <div className="errorMsg">{errors.name}</div>}
        </div>
        <div>
          <label>Departure:</label><br/>
          <select
            className={errors.departure ? 'forminputtype error' : 'forminputtype'}
            value={book.departure}
            onChange={(e) => setBook({ ...book, departure: e.target.value })}
          >
            <option value="">Select Departure City</option>
            {cityOptions.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          {errors.departure && <div className="errorMsg">{errors.departure}</div>}
        </div>
        <div>
          <label>Arrival:</label><br/>
          <select
            className={errors.arrival ? 'forminputtype error' : 'forminputtype'}
            value={book.arrival}
            onChange={(e) => setBook({ ...book, arrival: e.target.value })}
          >
            <option value="">Select Arrival City</option>
            {cityOptions.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          {errors.arrival && <div className="errorMsg">{errors.arrival}</div>}
        </div>
        <div>
          <label>Gender:</label><br/>
          <select
            className={errors.gender ? 'forminputtype error' : 'forminputtype'}
            value={book.gender}
            onChange={(e) => setBook({ ...book, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            {genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.gender && <div className="errorMsg">{errors.gender}</div>}
        </div>
      
        <div>
          <label>Date:</label><br/>
          <input
            type="text"
            className={errors.date ? 'forminputtype error' : 'forminputtype'}
            value={book.date}
            onChange={(e) => setBook({ ...book, date: e.target.value })}
          />
          {errors.date && <div className="errorMsg">{errors.date}</div>}
        </div>
        <button type="submit" className='forminputtype'>Update Book</button><br/>
      </form>
    </div>
  );
};

export default UpdateBookPage;