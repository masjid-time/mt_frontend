import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='card-deck'>
                    <div class='card bg-custom mb-3'>
                        <div class='row no-gutters'>
                            <div class='col-md-4'>
                                <img src='...' class='card-img' alt='...' />
                            </div>
                            <div class='col-md-8'>
                                <div class='card-body'>
                                    <h5 class='card-title text-body'>Title</h5>
                                    <p class='card-text text-body'>Details</p>
                                    <p class='card-text text-body'>
                                        <small class='text-muted'>
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
