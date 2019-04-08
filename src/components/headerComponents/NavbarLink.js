import React, {Component} from 'react'
import {Link} from "react-router-dom";

class NavbarLink extends Component {
    render() {return(
        <Link to="/" className="navbar-brand text-light">
            {this.props.linktext}
        </Link>
    )}
}

export default NavbarLink