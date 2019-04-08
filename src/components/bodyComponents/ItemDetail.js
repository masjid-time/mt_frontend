import React, {Component} from 'react'

class ItemDetail extends Component {
    render() {return(
        <div className="container">

            <div className="row no-gutters">
                <div className="col-md-12">
                    <div className="card mb-4 shadow-sm h-md-250">
                        <div className="card-body">
                            <div className="row">

                                <div className="col-md-8">
                                    <h1 className="card-title text-dark text-left display-4">
                                        {this.props.name}
                                    </h1>
                                    <h4 className="card-text text-muted text-dark text-left mb-4">
                                        {this.props.address.locality}
                                    </h4>
                                </div>

                                <div className="card-text col-md-4">
                                    <address ><strong> {this.props.address.addressline1} </strong></address>
                                    <address> {this.props.address.addressline2} </address>
                                    <address> {this.props.address.city}, {this.props.address.district} {this.props.address.pincode} </address>
                                    <address> {this.props.phone} </address>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row no-gutters">
                <table className="table table-hover border">
                    <tbody>
                        <tr>
                            <th scope="row">FAZR</th>
                            <td>{this.props.time.FAZR}</td>
                        </tr>
                        <tr>
                            <th scope="row">ZOHR</th>
                            <td>{this.props.time.ZOHR}</td>
                        </tr>
                        <tr>
                            <th scope="row">ASR</th>
                            <td>{this.props.time.ASR}</td>
                        </tr>
                        <tr>
                            <th scope="row">MAGHRIB</th>
                            <td>{this.props.time.MAGHRIB}</td>
                        </tr>
                        <tr>
                            <th scope="row">ISHA</th>
                            <td>{this.props.time.ISHA}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )}
}

export default ItemDetail