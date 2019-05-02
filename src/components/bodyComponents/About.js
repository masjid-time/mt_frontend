import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='card-deck'>
                    <div class='card mb-3'>
                        <div class='row no-gutters'>
                            <div class='col-md-4'>
                                <img src='...' class='card-img' alt='...' />
                            </div>
                            <div class='col-md-8'>
                                <div class='card-body'>
                                    <h5 class='card-title'>Title</h5>
                                    <p class='card-text'>Details</p>
                                    <p class='card-text'>
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
