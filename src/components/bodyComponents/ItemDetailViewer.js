import React, { Component } from 'react';
import RequestPromise from 'request-promise';
import Loader from './Loader';
import ItemDetail from './ItemDetail';
import Alert from './Alert';

class ItemDetailViewer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            let requestOptions = {
                uri: `${process.env.REACT_APP_API_URL}/api/v1/mosquedetail`,
                qs: {
                    id: this.props.params.id,
                    place_id: this.props.params.place_id,
                    distance: this.props.params.distance
                },
                timeout: 5000,
                json: true
            };

            let body = await RequestPromise(requestOptions);
            this.displayItem = (
                <ItemDetail
                    name={body.name}
                    address={body.address}
                    time={body.time}
                    distance={body.distance}
                    last_updated={body.last_updated}
                />
            );
        } catch (err) {
            if (err.error.message === 'Failed to fetch') {
                this.displayItem = <Alert message='Failed to fetch details' />;
            } else {
                this.displayItem = <Alert message='Some error occured' />;
            }
        } finally {
            this.setState({
                isLoading: false
            });
        }
    }

    render() {
        if (this.state.isLoading) {
            return <Loader />;
        }
        return this.displayItem;
    }
}

export default ItemDetailViewer;
