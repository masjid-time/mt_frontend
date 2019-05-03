import React, { Component } from 'react';

class Alert extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col justify-content-center vertical-align-middle'>
                    <div
                        className='alert alert-danger text-center h-auto w-75 bg-custom-alert'
                        role='alert'>
                        <i className='material-icons display-1'>error</i>
                        <h1 className='display-4'>{this.props.message}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;
