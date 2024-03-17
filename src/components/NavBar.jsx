import React from 'react';
import '../NavBar.css';
import heart from '../logos/plus.png';
import plus from '../logos/heart.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-text">eventbrite</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home </Link></li>
        <li><Link to="/">Browse events</Link></li>
        <li><a href="#">
        <img className='small-logo'src={heart} alt=''/>
        </a></li>
        <li><a href="#">
        <img className='small-logo'src={plus} alt=''/>
        </a></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

