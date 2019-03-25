import React, {Component} from 'react'

class AddressCard extends Component {
    render() {return(
        <div className="row mb-2 no-gutters">
            <div className="col-md-12">
                <div className="card mb-4 shadow-sm h-md-250">
                    <div className="card-body">

                    <div className="row">
                    <div className="col-md-8">
                        <h1 className="card-title mb-2 text-dark text-left display-4">
                            {this.props.title}
                        </h1>
                        <h4 className="card-text text-muted mb-2 mt-2 text-dark text-left">
                            Whitefield
                        </h4>
                    </div>
                    <div className="card-text col-md-4">
                        <address ><strong> Twitter, Inc. </strong></address>
                        <address> 1355 Market St, Suite 900 </address>
                        <address> San Francisco, CA 94103 </address>
                        <address> P: (123) 456-7890</address>
                    </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}
}

export default AddressCard