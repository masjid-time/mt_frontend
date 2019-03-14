import React, {Component} from 'react'

class Header extends Component {
    render() {return(
        <nav className="navbar navbar-expand-sml navbar-dark bg-dark mb-4" >
            <a className="navbar-brand text-light" href="#">Navbar</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-dark my-2 my-sm-0" type="submit">
                    <i className="material-icons md-light md-24">search</i>
                </button>
            </form>
        </nav>
    )}
}

export default Header;