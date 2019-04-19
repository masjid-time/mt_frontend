import React, { Component } from 'react';

class ItemDetail extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row no-gutters'>
                    <div className='col-md-12'>
                        <div className='card mb-4 shadow-sm h-md-250'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h1 className='card-title text-dark text-left display-4'>
                                            {this.props.name}
                                        </h1>
                                        <h4 className='card-text text-muted text-dark text-left mb-4'>
                                            {this.props.address}
                                        </h4>
                                        <address>
                                            <strong>
                                                {' '}
                                                {this.props.distance}{' '}
                                            </strong>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row no-gutters'>
                    {this.props.last_updated ? (
                        <blockquote className='blockquote text-center'>
                            <small className='ml-4 text-muted'>
                                {this.props.last_updated}
                            </small>
                        </blockquote>
                    ) : null}
                </div>

                <div className='row no-gutters'>
                    <table className='table table-hover border'>
                        <tbody>
                            <tr>
                                <th scope='row'>FAZR</th>
                                <td>{this.props.time.FAZR}</td>
                                <td className='text-right'>
                                    <i className='material-icons'>edit</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>ZOHR</th>
                                <td>{this.props.time.ZOHR}</td>
                                <td className='text-right'>
                                    <i className='material-icons'>edit</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>ASR</th>
                                <td>{this.props.time.ASR}</td>
                                <td className='text-right'>
                                    <i className='material-icons'>edit</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>MAGHRIB</th>
                                <td>{this.props.time.MAGHRIB}</td>
                                <td className='text-right'>
                                    <i className='material-icons'>edit</i>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>ISHA</th>
                                <td>{this.props.time.ISHA}</td>
                                <td className='text-right'>
                                    <i className='material-icons'>edit</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ItemDetail;
