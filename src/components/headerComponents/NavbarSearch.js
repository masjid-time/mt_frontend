import React, {Component} from 'react'

class NavbarSearch extends Component {
    render() {return(
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark my-2 my-sm-0" type="submit">
                <i className="material-icons md-light md-24">search</i>
            </button>
        </form>
    )}
}

export default NavbarSearch