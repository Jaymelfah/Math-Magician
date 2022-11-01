import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="Nav-bar">
      <div className="Logo">
        <span>Math Magicians</span>
      </div>
      <ul className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/calculator">Calculator</Link>
        <Link className="link" to="/quotes">Quotes</Link>
      </ul>
    </div>
  </>
);

export default Navbar;
