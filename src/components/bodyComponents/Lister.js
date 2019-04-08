import React, {Component} from 'react'
import RequestPromise from 'request-promise'
import {Link} from 'react-router-dom'
import ListItem from './ListItem'
import Loader from './Loader'
import Alert from './Alert'


class Lister extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        try {
            this.body = await RequestPromise(`${process.env.REACT_APP_API_URL}/api/v1/mosques`, {timeout: 5000, json: true})
            this.mosqueList = await this.body.mosques.map((mosque) =>
            <Link to={`/mosquedetail/${mosque.id}`} className="text-reset text-decoration-none" key={mosque.id}>
                <ListItem title={mosque.name} locality={mosque.locality}/>
            </Link>
            )
            this.displayItem = <div className="container">{this.mosqueList}</div>      
        } catch (err) {
            if (err.error.message === 'Failed to fetch') {
                this.displayItem = <Alert message="Failed to fetch details" />
            } else {
                this.displayItem = <Alert message="Some error occured" />
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
            this.displayItem
        )
    }
}

export default Lister