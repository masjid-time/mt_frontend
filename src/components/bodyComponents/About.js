import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row align-items-start'>
                    <div className='container-fluid m-2 p-2'>
                        <h1 className='display-4 text-center font-weight-bold handwriting'>
                            Worries end... When SALAH begins
                        </h1>
                    </div>
                </div>
                <div className='row align-items-end'>
                    <div className='container-fluid mx-0 px-0 bg-white fixed-bottom about-height'>
                        <div className='card border-0'>
                            <div className='row no-gutters'>
                                <div className='col-md-12'>
                                    <div className='card-body text-center about-padding'>
                                        <p className='h1 font-weight-bold'>
                                            Our Mission
                                        </p>
                                        <p className='lead'>
                                            Create an Islamic website with easy
                                            access to masjids with prayer
                                            timings so you can be worry free and
                                            have your salah at the right time
                                            and at the right place.
                                        </p>
                                        <br />
                                        <address className='text-body'>
                                            <strong className='mr-2'>
                                                Contact us:
                                            </strong>
                                            <a href='masjidtimeinfo@gmail.com'>
                                                masjidtimeinfo@gmail.com
                                            </a>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
