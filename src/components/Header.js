import React, { Component } from 'react';
import NavbarLink from './headerComponents/NavbarLink';
import NavbarSearch from './headerComponents/NavbarSearch';

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-custom mb-4'>
                <div className='navbar-collapse'>
                    <NavbarLink linkText='Home' linkPath='/' />
                    <NavbarLink linkText='About' linkPath='/about' />
                </div>
                <NavbarSearch />
            </nav>
        );
    }
}

export default Header;
