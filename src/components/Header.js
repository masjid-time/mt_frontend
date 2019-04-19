import React, { Component } from 'react';
import NavbarLink from './headerComponents/NavbarLink';

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sml navbar-dark bg-dark mb-4'>
                <NavbarLink linktext='Home' />
            </nav>
        );
    }
}

export default Header;
