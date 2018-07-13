import React from 'react';

import './Header.css'
import logo from '../../logo.svg'
import Sheet from '../sheet/Sheet'

const Header = ({ handleTextChange, reminderText }) => {

    return (
        <div className="Header">
            <img src={logo} alt="" className="logo"/>
            <Sheet handleTextChange={handleTextChange} reminderText={reminderText}/>
        </div>
    )
}
export default Header