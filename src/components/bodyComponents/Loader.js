import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center vertical-align-middle'>
                <div
                    className='spinner-grow text-body spinner-grow-bg'
                    role='status'>
                    <span className='sr-only'>Loading...</span>
                </div>
            </div>
        );
    }
}

export default Loader;
