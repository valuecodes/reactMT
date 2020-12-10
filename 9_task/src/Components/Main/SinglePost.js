import React,{ useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'

const SinglePost = () => {

    const [post, setPost] = useState()
    const [error, setError] = useState(null)
    let { postID } = useParams()
    console.log(postID)
    useEffect(() => {
        if(!post){
            axios.get('http://localhost:3001/posts/'+postID)
                .then(res => setPost(res.data))
                .catch(err => setError(err.message))
        }
    }, [])

    // let postData = undefined

    // if(postID){
    //     postData = <h1>Loading...</h1>
    // }

    // if(post){
    //     postData = (
    //         <div>
    //             {post.title}
    //         </div>
    //     )
    // }

    // if(error){
    //     return 
    // }

    return ( 
        error? <div>{error}</div>:
        !post? <h1>Loading...</h1>:
        <div>{post.title}</div>
    )
    // return (
    //     error?<div>{error}</div>:postData
    // );
};

export default SinglePost;