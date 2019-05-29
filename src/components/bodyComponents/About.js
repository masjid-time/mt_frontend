import React, { Component } from 'react';
import cardImage from './../../images/background.jpg';
import githubImage from './../../images/GitHub-Mark.png';
import twitterImage from './../../images/Twitter_Logo_Blue.png';

class About extends Component {
    render() {
        return (
            <div className='container-fluid p-0 m-0 bg-white about-height'>
                <div className='card mt-n4 mb-0 border-0'>
                    <img src={cardImage} className='about-img' alt='...' />
                    <div className='card-img-overlay text-center font-weight-bold handwriting overlay-bottom'>
                        Worries end... When SALAH begins
                    </div>
                    <div className='card-body about-card'>
                        <br />
                        <h5 className='h4 text-center font-weight-bolder'>
                            Our Mission
                        </h5>
                        <p className='card-text text-center'>
                            Create an Islamic website with easy access to
                            masjids with prayer timings so you can be worry free
                            and have your salah at the right time and at the
                            right place.
                        </p>
                        <br />
                        <p className='card-text text-center'>
                            <small className='text-muted '>
                                Write to us @
                                <span className='ml-2 text-primary'>
                                    masjidtimeinfo@gmail.com
                                </span>
                            </small>
                        </p>
                        <div className='card-text text-center logo-z-index'>
                            <a
                                className='text-reset text-decoration-none '
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://github.com/masjid-time'>
                                <img
                                    className='p-2 rounded img-fluid github-logo-size'
                                    src={githubImage}
                                    alt='github'
                                />
                            </a>
                            <a
                                className='text-reset text-decoration-none '
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://twitter.com/masjid_time'>
                                <img
                                    className='p-2 rounded img-fluid twitter-logo-size'
                                    src={twitterImage}
                                    alt='twitter'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
