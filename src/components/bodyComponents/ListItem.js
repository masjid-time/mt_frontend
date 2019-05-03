import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <div className='card mb-2 shadow-sm h-md-250 bg-custom'>
                        <div className='card-body p-2'>
                            <div className='row'>
                                <div className='col-md-10'>
                                    <h4 className='card-text text-body text-left mb-0'>
                                        {this.props.title}
                                    </h4>
                                    <span className='card-text text-body text-body text-left'>
                                        <small>{this.props.address}</small>
                                    </span>
                                </div>

                                <div className='card-text col-md-2'>
                                    <span className='card-text text-body text-left mt-2'>
                                        <small>{this.props.distance}</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
