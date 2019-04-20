import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Lister from './bodyComponents/Lister';
import ItemDetailViewer from './bodyComponents/ItemDetailViewer';

class Body extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Lister} />
                <Route
                    path='/search/:place'
                    render={({ match }) => (
                        <Lister place={match.params.place} />
                    )}
                />
                <Route
                    path='/mosquedetail/:id/:place_id/:distance'
                    render={({ match }) => (
                        <ItemDetailViewer params={match.params} />
                    )}
                />
            </div>
        );
    }
}

export default Body;
