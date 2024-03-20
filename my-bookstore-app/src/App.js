
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { ToastContainer } from 'react-toastify';
import ViewBooksPage from './components/ViewBooksPage';
import UpdateBookPage from './components/UpdateBookPage';
import DeleteBookPage from './components/DeleteBookPage';
import LandingPage from './components/LandingPage';
import SaveBookPage from './components/SaveBookPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
// import Login from './LoginPage';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>       
        <Route path="/" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/view-tickets" element={<ViewBooksPage />} />
          <Route path="/update-ticket" element={<UpdateBookPage />} />
          <Route path="/cancle-ticket" element={<DeleteBookPage />} />
          <Route path="/book-ticket" element={<SaveBookPage />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;