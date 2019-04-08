import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Lister from './bodyComponents/Lister'
import ItemDetailViewer from './bodyComponents/ItemDetailViewer'

class Body extends Component {
    render() {return (
        <div>
            <Route exact path="/" component={Lister} />
            <Route path="/mosquedetail/:id" render={({match})=><ItemDetailViewer id={match.params.id}/>}/>
        </div>
    )}
}

export default Body