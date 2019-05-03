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
            isLoading: true,
            isLoadingMore: false,
            nextPageToken: '',
            mosqueList: []
        };
        window.onscroll = () => {
            if (
                window.innerHeight + window.pageYOffset >=
                document.body.offsetHeight - 2
            ) {
                if (!this.state.isLoadingMore && this.state.nextPageToken) {
                    this.loadMore();
                }
            }
        };
    }

    async loadMore() {
        this.setState({
            isLoadingMore: true
        });
        try {
            let requestOptions = {
                uri: `${process.env.REACT_APP_API_URL}/api/v1/mosques`,
                qs: {
                    next_page_token: this.state.nextPageToken
                },
                timeout: 5000,
                json: true
            };
            let body = await RequestPromise(requestOptions);
            let updatedMosqueList = await body.results.map(mosque => (
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
            this.setState({
                nextPageToken: body.next_page_token,
                mosqueList: [...this.state.mosqueList, ...updatedMosqueList]
            });
            this.displayItem = (
                <div className='container'>
                    {this.props.place ? (
                        <div className='alert alert-light h4 font-italic mb-4 text-center'>
                            {`Showing search results for "${
                                this.props.place
                            }" `}
                        </div>
                    ) : null}
                    {this.state.mosqueList}
                </div>
            );
        } catch (err) {
            if (err.error.message === 'Failed to fetch') {
                this.displayItem = <Alert message='Failed to fetch details' />;
            } else {
                this.displayItem = <Alert message='Some error occured' />;
            }
        } finally {
            this.setState({
                isLoadingMore: false
            });
        }
    }

    async componentDidMount() {
        try {
            let qs;
            if (this.props.place) {
                qs = { place: this.props.place };
            } else {
                let position = await getLocation();
                qs = {
                    lat: position.latitude,
                    lng: position.longitude
                };
            }
            let requestOptions = {
                uri: `${process.env.REACT_APP_API_URL}/api/v1/mosques`,
                qs,
                timeout: 5000,
                json: true
            };
            let body = await RequestPromise(requestOptions);
            if (body.results) {
                let initialMosqueList = await body.results.map(mosque => (
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
                this.setState({
                    nextPageToken: body.next_page_token,
                    mosqueList: [...initialMosqueList]
                });
                this.displayItem = (
                    <div className='container'>
                        {this.props.place ? (
                            <div className='alert alert-light h4 font-italic mb-4 text-center bg-transparent border-0 text-body'>
                                {`Showing search results for "${
                                    this.props.place
                                }" `}
                            </div>
                        ) : null}
                        {this.state.mosqueList}
                    </div>
                );
            } else {
                this.displayItem = (
                    <div className='container'>
                        <div className='alert alert-light h4 font-italic mb-4 text-center bg-transparent border-0 text-body'>
                            {`No results found for "${this.props.place}" `}
                        </div>
                    </div>
                );
            }
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
        } else if (this.state.isLoadingMore) {
            return (
                <>
                    {this.displayItem}
                    <div className='text-center mt-4'>
                        <div
                            className='spinner-border text-light'
                            role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    </div>
                </>
            );
        } else {
            return this.displayItem;
        }
    }
}

export default Lister;
