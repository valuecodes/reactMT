import React,{ useState, useEffect } from 'react'
import axios from 'axios'

const API = 'http://localhost:3001/posts/'

export default function Blog() {
    const [title, setTitle] = useState('My Blog')
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(API).then(response => setPosts(response.data))
    },[])

    const changeTitleHandler=()=>{
        let title = prompt("What should be the next title?")
        setTitle(title)
    }

    return (
        <div className='container'>
            <h1 onClick={changeTitleHandler} >{title}</h1>
            <div className='posts'>
                {posts.map(post =>
                    <div key={post.id} className='post'>
                        <img src={post.img}/>
                        <h2>{post.title}</h2>
                        <h2>{post.desc}</h2>
                        <h2>{post.author}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}
