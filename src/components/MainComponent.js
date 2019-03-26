import React, {Component} from 'react'
import RequestPromise from 'request-promise'
import AddressCard from './AddressCard'
import Loader from './Loader'

class MainComponent extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        try {
            this.body = await RequestPromise('https://prayertiming-backend.herokuapp.com/api/v1/mosques', {timeout: 5000, json: true})
            this.addressCard = await this.body.mosques.map((mosque) => <AddressCard key={mosque.id} title={mosque.name} />)
        } catch (err) {
            if (err.error.message === 'Failed to fetch') {
                this.addressCard = <AddressCard title="Failed to fetch" />
            } else {
                this.addressCard = <AddressCard title="Some error occured" />
            } 
        } finally {
            this.setState({
                isLoading: false
            })
        }
    }

    render() {
        if (this.state.isLoading) {
            return(
               <Loader />
            )
        }
        return(
            <div className="container-fluid">
                {this.addressCard}
            </div>
        )
    }
}

export default MainComponent;