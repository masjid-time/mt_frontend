import React, {Component} from 'react'
import RequestPromise from 'request-promise'
import ListItem from './ListItem'
import Loader from './Loader'


class Lister extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        try {
            console.log('.env variable process.env.NAME-->', process.env.NAME)
            this.body = await RequestPromise('http://localhost:5000/api/v1/mosques', {timeout: 5000, json: true})
            this.items = await this.body.mosques.map((mosque) => <ListItem key={mosque.id} title={mosque.name} locality={mosque.locality}/>)
        } catch (err) {
            if (err.error.message === 'Failed to fetch') {
                this.items = <ListItem title="Failed to fetch" />
            } else {
                this.items = <ListItem title="Some error occured" />
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
                {this.items}
            </div>
        )
    }
}

export default Lister