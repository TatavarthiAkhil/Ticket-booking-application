import React, { useState } from 'react';
import axios from 'axios';

const DeleteBookPage = () => {
    const [bookId, setBookId] = useState('');
    const [reason, setreason] = useState('');

    const handleDeleteBook = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/api/books/${bookId}`);
            alert('Ticket cancelled successfully!');
            setBookId('');
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Error deleting book. Please try again.');
        }
    };

    return (
      <div id="Book_Container">
            <h1 id="form_heading">Cancel Ticket</h1>
            <form id="form" onSubmit={handleDeleteBook}>
                <label id="formlabel_1">
                    Ticket Id:
                    </label><br/>
                    <input type="text" className='forminputtype' value={bookId} onChange={e => setBookId(e.target.value)} /><br/>     
                          
                    <label id="formlabel_1">
                    Reason for cancelation:
                    </label><br/>
                 <input type="text" className='forminputtype' value={reason} onChange={e => setreason(e.target.value)} /><br/>     
                     
                <button type="submit" className='forminputtype'>Cancel Ticket</button><br/>
            </form>
        </div>

    );
};

export default DeleteBookPage;
