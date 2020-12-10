import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import SinglePost from './SinglePost'
import { useRouteMatch, Route, Switch } from 'react-router-dom'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  let { path, url } = useRouteMatch()

  useEffect(() => {
    axios.get("http://localhost:3001/posts/").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const PostList = posts.map((p) => {
    return (
      <BlogCard
        key={p.id}
        title={p.title}
        author={p.author}
        desc={p.desc}
        img={p.img}
        link={`${url}/${p.id}`}
      />
    );
  });

  return( 
    <>
      <Switch>
        <Route path='/blog/:postID'>
          <SinglePost/>
        </Route>
        <Route path={path}>
          {PostList}
        </Route>
      </Switch>
    </>
  )
};

export default Blog;
