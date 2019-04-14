import React, {Component} from 'react'

class ListItem extends Component {
    render() {return(
        <div className="row no-gutters">
            <div className="col-md-12">
                <div className="card mb-2 shadow-sm h-md-250">
                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-10">
                                <h3 className="card-title text-dark text-left display-6">
                                    {this.props.title}
                                </h3>
                                <h6 className="card-text text-muted text-dark text-left display-6">
                                    {this.props.address}
                                </h6>
                            </div>

                            <div className="card-text col-md-2">
                                <h6 className="card-text text-dark text-left display-6 mt-2">
                                    {this.props.distance}
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default ListItem