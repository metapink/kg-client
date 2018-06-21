import React, { Component } from 'react'
import Card from './Card'
import Axios from 'axios'
import db from '../config/db'

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardList: null
        }
    }

    componentDidMount() {
        console.log(db)
        let uri = db.cloudUri
        if(process.env.NODE_ENV === 'development') {
            uri = db.localUri
        }
        console.log(process.env.NODE_ENV)
        console.log(uri)
        console.log(this.props.match)
        let target = `${uri}/post?userId=${this.props.match.params.userId}`
        console.log(target)
        Axios.get(target)
        .then(posts => {
            console.log(posts)
            let cardList = posts.data.map(post =>  {return <Card key={post._id} postId={post._id} /> })
            this.setState({cardList: cardList})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className = 'PostList'>
                {this.state.cardList}
            </div>
        )
    }
}

export default PostList