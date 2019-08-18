import React from 'react';
import logo from '../assets/New-Visions.png'

const Header = () => {
    return (<nav className="navbar">
                <img width="50px" style={{objectFit: "cover"}} src={logo} alt="Logo" />
           </nav>);
}

export default Header;