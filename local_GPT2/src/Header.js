
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        MyApp
      </Link>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;