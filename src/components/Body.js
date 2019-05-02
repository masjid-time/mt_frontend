import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Lister from './bodyComponents/Lister';
import ItemDetailViewer from './bodyComponents/ItemDetailViewer';
import About from './bodyComponents/About';

class Body extends Component {
    render() {
        return (
            <>
                <Route exact path='/' component={Lister} />
                <Route exact path='/about' component={About} />
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
            </>
        );
    }
}

export default Body;
