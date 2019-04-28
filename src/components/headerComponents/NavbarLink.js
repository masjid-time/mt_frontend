import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarLink extends Component {
    render() {
        return (
            <Link
                to='/'
                className='navbar-brand text-white text-decoration-none font-weight-bold'>
                {this.props.linktext}
            </Link>
        );
    }
}

export default NavbarLink;
