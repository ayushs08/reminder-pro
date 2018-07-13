import React from 'react';

import './Header.css'
import logo from '../../logo.svg'
import Sheet from '../sheet/Sheet'

const Header = () => {

    return (
        <div className="Header">
            <img src={logo} alt="" className="logo"/>
            <Sheet />
        </div>
    )
}
export default Header