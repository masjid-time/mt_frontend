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


{/* <div className="card-text col-md-4">
<address ><strong> Twitter, Inc. </strong></address>
<address> 1355 Market St, Suite 900 </address>
<address> San Francisco, CA 94103 </address>
<address> P: (123) 456-7890</address>
</div> */}

export default ListItem