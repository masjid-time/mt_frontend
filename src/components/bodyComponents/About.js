import React, { Component } from 'react';

class About extends Component {
    render() {
        let hash = require('crypto-js/sha256');
        console.log(hash('Q-6o3XdKt5nRFTWPDYbWgGF9uMM69MWfqO7ZVwOVajw'));
        return (
            <div className='container-fluid'>
                <div className='row about-height'>
                    <div className='col-md-12'>
                        <h1 className='display-4 text-center font-weight-bold handwriting'>
                            Worries end... When SALAH begins
                        </h1>
                    </div>
                </div>
                <nav className='navbar fixed-bottom bg-white'>
                    <div className='card-body text-center'>
                        <p className='h2 font-weight-bold'>Our Mission</p>
                        <p className='lead'>
                            Create an Islamic website with easy access to
                            masjids with prayer timings so you can be worry free
                            and have your salah at the right time and at the
                            right place.
                        </p>
                        <address className='text-body'>
                            <strong className='mr-2'>Contact us:</strong>
                            <a href='masjidtimeinfo@gmail.com'>
                                masjidtimeinfo@gmail.com
                            </a>
                        </address>
                    </div>
                </nav>
            </div>
        );
    }
}

export default About;
