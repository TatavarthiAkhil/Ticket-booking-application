import React from 'react';
import BgBookLogo from '../components/Images/bookingImage.jpg';

const About = () => {
    return (
        <div class="container">
            
            <img src={BgBookLogo} style={{ width: "1000px", height: "600px" }} alt="BgBookImage" />
            <div class="content">
            <h1>About the Ticket Booking Application</h1>
            <p style={{ fontSize: "22px", color: "white", fontFamily: "Times New Roman" }}>
                The Ticket Booking Application is a web-based application designed to Book Tickets.,

                Imagine seamlessly booking tickets for concerts, movies, plays, or any other event, all from the comfort of your own device. Ticket booking applications offer a user-friendly experience that simplifies the process and saves you valuable time
           
                This application allows users to perform various operations on bookings, including buying new tickets,
                updating information of passengers, Cancel bookings.
            
                It is built using technologies such as React for the frontend
    
            </p>
            </div>
        </div>
    );
};

export default About;
