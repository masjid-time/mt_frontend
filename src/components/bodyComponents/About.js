import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container justify-content-center'>
                <div className='card bg-custom about-margin'>
                    <div className='row no-gutters'>
                        <div className='col-md-12'>
                            <div className='card-body'>
                                <h4 className='card-title text-body'>
                                    WORRIES END WHEN SALAH BEGINS
                                </h4>
                                <ul className='card-text text-body list-styled'>
                                    <li className='mb-2'>
                                        Listings of nearby masjids based on
                                        location
                                    </li>
                                    <li className='mb-2'>
                                        Prayer timings of all the masjids will
                                        be displayed and can be changed
                                        accordingly by user
                                    </li>
                                    <li className='mb-2'>
                                        Search by area for masjids around the
                                        the world
                                    </li>
                                    <li className='mb-2'>
                                        User can easily look for address and the
                                        distance of every masjid around
                                    </li>
                                    <li className='mb-2'>
                                        One click navigation access to masjids
                                    </li>
                                    <li className='mb-2'>
                                        It is an user friendly application for
                                        muslims which serves its purpose
                                    </li>
                                    <li className='mb-2'>
                                        Helpfull while we travel and on daily
                                        basis
                                    </li>
                                    <li className='mb-2'>
                                        Now you can offer your salah at the
                                        right time and at the right place
                                    </li>
                                </ul>
                                <address className='card-text text-body'>
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
        );
    }
}

export default About;
