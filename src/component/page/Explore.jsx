import React, { Component } from 'react'
import Axios from 'axios'

// components
import PostGrid from '../partial/PostGrid'
import Search from '../partial/Search'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        let url = 'https://metahues-kg-api.herokuapp.com'
        if(process.env.API_URL !== undefined) url = process.env.API_URL

        Axios.get(`${url}/post`)
        .then(posts => {
            console.log(posts)
            this.setState({posts: posts.data})
        })
        .catch(err => {
            console.log(err)
        })
        .catch(err => console.log(err))
    }

    render() {
        if(this.state.posts === null) return ( <div className = 'Home' />)
        return ( 
            <div className = 'Explore'>
                <Search />
                <PostGrid posts={this.state.posts} />
            </div>
        )
    }
}

export default Home