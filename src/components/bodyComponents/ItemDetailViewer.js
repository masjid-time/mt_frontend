import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import RequestPromise from 'request-promise'
import Loader from './Loader'
import ItemDetail from './ItemDetail'
import Alert from './Alert'
import Lister from './Lister'


class ItemDetailViewer extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        try {
            this.body = await RequestPromise(`${process.env.REACT_APP_API_URL}/api/v1/mosquedetail/${this.props.id}`, {timeout: 5000, json: true})
            if (this.body.found) {
                this.displayItem = <ItemDetail name={this.body.name} address={this.body.address} phone={this.body.phone} time={this.body.time} />
            } else {
                this.displayItem = <Redirect exact path="/" component={Lister} />
            }
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
            return(<Loader />)
        }
        return(this.displayItem)
    }
}

export default ItemDetailViewer