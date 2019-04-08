import React, {Component} from 'react'

class ListItem extends Component {
    render() {return(
        <div className="row no-gutters">
            <div className="col-md-12">
                <div className="card mb-4 shadow-sm h-md-250">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h1 className="card-title text-dark text-left display-4">
                                    {this.props.title}
                                </h1>
                                <h4 className="card-text text-muted text-dark text-left">
                                    {this.props.locality}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default ListItem