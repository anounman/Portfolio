import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  return (
    <div className='nav-wrapper'>
        <div className='nav-left'>
            <div className='name'>
                Ankush
            </div>
            <span>toggle</span>
        </div>
        <div className='nav-right'>
        <div className='nav-item'>
            <ul style={{listStyleType: 'none'}}>
                <li>Home</li>
                <li>Service</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
        
        </div>
            <button className='button'>
            Contact Us
        </button>
        </div>

    </div>
  )
}

export default NavBar;