import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarLink extends Component {
    render() {
        return (
            <Link
                to={this.props.linkPath}
                className='navbar-brand text-body text-decoration-none font-weight-bold'>
                {this.props.linkText}
            </Link>
        );
    }
}

export default NavbarLink;
