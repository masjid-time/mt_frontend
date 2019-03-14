import React, {Component} from 'react'
import AddressCard from './AddressCard'
import Request from 'request'
import Loader from './Loader';

class MainComponent extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    getNewsUpdates(){
        return new Promise((resolve, reject) => {
            Request('https://newsapi.org/v2/top-headlines?country=in&apiKey=f0180cd3389c453f87d795834c5b4dba',
            (err, resp, body) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(JSON.parse(body))
            }
        )
        })
    }

    async componentDidMount() {
        this.body = await this.getNewsUpdates()
        this.articles = this.body.articles
        this.addressCard = await this.articles.map((article) => <AddressCard title={article.title} />)
        console.log(this.addressCard)
        this.setState({
            isLoading: false
        })
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