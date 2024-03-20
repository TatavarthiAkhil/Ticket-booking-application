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

const SaveBook = () => {
  const [name, setName] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const handleSaveBook = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(name.trim())) {
      newErrors.name = 'Name should only contain letters';
    }
    if (!departure.trim()) {
      newErrors.departure = 'Departure is required';
    }
    if (!arrival.trim()) {
      newErrors.arrival = 'Arrival is required';
    }
    if (!departureTime.trim()) {
      newErrors.departureTime = 'Departure Time is required';
    }
    if (!arrivalTime.trim()) {
      newErrors.arrivalTime = 'Arrival Time is required';
    }
    if (!gender.trim()) {
      newErrors.gender = 'Gender is required';
    }
    if (!price.trim()) {
      newErrors.price = 'Price is required';
    } else if (!/^\d+(\.\d{1,2})?$/.test(price.trim())) {
      newErrors.price = 'Price should be a valid number';
    }
    if (!date.trim()) {
      newErrors.date = 'Date is required';
    } else if (!isValidDate(date.trim())) {
      newErrors.date = 'Date should be in the format YYYY-MM-DD';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/books/save', {
        name,
        departure,
        arrival,
        gender,
        price,
        date,
        departureTime,
        arrivalTime,
      });
      alert('Your Booking is successful!');
      setName('');
      setDeparture('');
      setArrival('');
      setDepartureTime('');
      setArrivalTime('');
      setGender('');
      setPrice('');
      setDate('');
      setErrors({});
    } catch (error) {
      console.error('Error in booking ticket:', error);
      alert('Error in booking ticket. Please try again.');
    }
  };

  const isValidDate = (dateString) => {
    // Check if the dateString is in the format YYYY-MM-DD
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(dateString);
  };

  return (
    <div id="Book_Container">
      <h1 id="form_heading">Enter Details</h1>
      <form id="form" onSubmit={handleSaveBook}>
        <label id="formlabel_1">
          Name of the passenger:
        </label><br/>
        <input
          type="text"
          className={errors.name ? 'forminputtype error' : 'forminputtype'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="errorMsg">{errors.name}</div>}
        <br/>

        <label>
          Departure:
        </label><br/>
        <select
          className={errors.departure ? 'forminputtype error' : 'forminputtype'}
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        >
          <option value="">Select Departure City</option>
          {cityOptions.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        {errors.departure && <div className="errorMsg">{errors.departure}</div>}
        <br/>
        <label>
          Departure Time:
        </label><br/>
        <input
          type="text"
          className={errors.departureTime ? 'forminputtype error' : 'forminputtype'}
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
        />
        {errors.departureTime && <div className="errorMsg">{errors.departureTime}</div>}
        <br/>
        <label>
          Arrival:
        </label><br/>
        <select
          className={errors.arrival ? 'forminputtype error' : 'forminputtype'}
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        >
          <option value="">Select Arrival City</option>
          {cityOptions.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        {errors.arrival && <div className="errorMsg">{errors.arrival}</div>}
        <br/>
        <label>
          Arrival Time:
        </label><br/>
        <input
          type="text"
          className={errors.arrivalTime ? 'forminputtype error' : 'forminputtype'}
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
        />
        {errors.arrivalTime && <div className="errorMsg">{errors.arrivalTime}</div>}
        <br/>
        <label>
          Gender:
        </label><br/>
        <select
          className={errors.gender ? 'forminputtype error' : 'forminputtype'}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.gender && <div className="errorMsg">{errors.gender}</div>}
        <br/>

        <label>
          Price:
        </label><br/>
        <input
          type="text"
          className={errors.price ? 'forminputtype error' : 'forminputtype'}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <div className="errorMsg">{errors.price}</div>}
        <br/>

        <label>
          Date (YYYY-MM-DD):
        </label><br/>
        <input
          type="text"
          className={errors.date ? 'forminputtype error' : 'forminputtype'}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <div className="errorMsg">{errors.date}</div>}
        <br/>

        <button type="submit" className='forminputtype'>Book A Ticket</button><br/>
      </form>
    </div>
  );
};

export default SaveBook;
