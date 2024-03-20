
import { Link } from 'react-router-dom';

const NavBar = () => {
return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Bookstore Application</Link> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link" to="/">Login</Link>
                            </li>
                        <li className="nav-item">
                                <Link className="nav-link" to="/landing">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/book-ticket">Book ticket</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view-tickets">Booked Tickets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/update-ticket">Update</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cancle-ticket">Cancel</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
</li> 
                        </ul>
                    </div>
                </div>
            </nav>
)
};
export default NavBar;



