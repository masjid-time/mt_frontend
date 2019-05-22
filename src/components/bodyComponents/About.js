import React, { Component } from 'react';
import cardImage from './../../images/background.jpg';

class About extends Component {
    render() {
        return (
            <div className='container about-margin'>
                <div className='card-deck mb-0'>
                    <div className='card mb-0 border-0 shadow-lg'>
                        <img
                            src={cardImage}
                            className='card-img-top'
                            alt='...'
                        />
                        <div className='card-img-overlay text-center font-weight-bold handwriting'>
                            Worries end... When SALAH begins
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title text-center'>
                                Our Mission
                            </h5>
                            <p className='card-text text-center'>
                                Create an Islamic website with easy access to
                                masjids with prayer timings so you can be worry
                                free and have your salah at the right time and
                                at the right place.
                            </p>
                            <p className='card-text text-center'>
                                <small className='text-muted '>
                                    Contact us:
                                    <a
                                        className='ml-2'
                                        href='masjidtimeinfo@gmail.com'>
                                        masjidtimeinfo@gmail.com
                                    </a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
