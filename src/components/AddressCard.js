import React, {Component} from 'react'

class AddressCard extends Component {
    render() {return(
        <div className="row mb-2">
            <div className="col-md-12">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body">
                        <h3 className="mb-2 text-dark text-left">
                            {this.props.title}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default AddressCard