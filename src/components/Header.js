import React, { Component } from 'react';
import NavbarLink from './headerComponents/NavbarLink';
import NavbarSearch from './headerComponents/NavbarSearch';

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sml bg-tranparent mb-4'>
                <NavbarLink linktext='Home' />
                <NavbarSearch />
            </nav>
        );
    }
}

export default Header;
