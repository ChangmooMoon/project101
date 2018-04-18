import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
    return (
        <div className="navBar">
          <div className="home">
            <Link to="/"><img src='https://i.imgur.com/KFEw7SX.png' alt=""/></Link>
          </div>
          <div className="lists"> 
            <Link to="/about" className="about">About</Link>
          </div>
        </div>
    );
};

export default Nav;