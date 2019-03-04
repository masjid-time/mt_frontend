import React from 'react'

function Header() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">Navbar</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Header;