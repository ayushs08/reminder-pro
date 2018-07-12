import React from 'react';

import './Header.css'
import logo from '../../logo.svg'
import Sheet from '../sheet/Sheet'

const Header = ({ handleChange }) => {

    return (
        <div className="Header">
            <img src={logo} alt="" className="logo"/>
            <Sheet handleChange={handleChange}/>
        </div>
    )
}
export default Header