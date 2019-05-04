import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='card-deck'>
                    <div className='card bg-custom mb-3'>
                        <div className='row no-gutters'>
                            <div className='col-md-4'>
                                <img src='...' className='card-img' alt='...' />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h5 className='card-title text-body'>
                                        Title
                                    </h5>
                                    <p className='card-text text-body'>
                                        Details
                                    </p>
                                    <p className='card-text text-body'>
                                        <small className='text-muted'>
                                            Contacts
                                        </small>
                                    </p>
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
