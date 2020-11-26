import React, { Component } from 'react'
import axios from 'axios'
import './Posts.css'

const API = 'https://jsonplaceholder.typicode.com/photos'

export default class Posts extends Component {

    state = {
        posts:[],
        isLoading: false
    }

    componentDidMount(){

        this.setState({isLoading: true})

        axios.get(API,{params:{ _limit: 15 }})
            .then(response => this.setState({
                posts: response.data,
                isLoading: false
            }))
    }

    removeHandler(id){
        let oldPosts = [...this.state.posts]
        let newPosts = oldPosts.filter(post => post.id!==id)
        this.setState({posts:newPosts})
    }
    
    render() {

        if(this.state.isLoading){
            return <p>Loading posts...</p>
        }
        return (
            <div>
                <ul className='posts'>
                    {this.state.posts.map(post => 
                        <li key={post.id} className='post'>
                            <img src={post.thumbnailUrl} alt={post.id}/>
                            <h2>
                                {post.id} {post.title}
                            </h2>
                            <div className='remove' onClick={()=>this.removeHandler(post.id)}>
                                X
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
