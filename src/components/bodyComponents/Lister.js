import React, { Component } from 'react';
import RequestPromise from 'request-promise';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import Loader from './Loader';
import Alert from './Alert';
import { getLocation } from '../../util/Location';

class Lister extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            let position = await getLocation();
            let requestOptions = {
                uri: `${process.env.REACT_APP_API_URL}/api/v1/mosques`,
                qs: {
                    lat: position.latitude,
                    lng: position.longitude
                },
                timeout: 5000,
                json: true
            };
            let body = await RequestPromise(requestOptions);
            let mosqueList = await body.results.map(mosque => (
                <Link
                    to={`/mosquedetail/${mosque.id}/${mosque.place_id}/${
                        mosque.distance
                    }`}
                    className='text-reset text-decoration-none'
                    key={mosque.id}>
                    <ListItem
                        title={mosque.name}
                        address={mosque.address}
                        distance={mosque.distance}
                    />
                </Link>
            ));
            this.displayItem = <div className='container'>{mosqueList}</div>;
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

export default Lister;
