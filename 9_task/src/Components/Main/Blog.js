import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import SinglePost from './SinglePost'
import { makeStyles } from '@material-ui/core/styles';
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100vw',
    gridTemplateColumns:'1fr 1fr'
  },
}));

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
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
          <div className={classes.root} >
            <Box p={(2, 4)}>
              <Grid margin={20} container justify="center" spacing={20}>
                {PostList}
              </Grid>
            </Box>
          </div>
        </Route>
      </Switch>
    </>
  )
};

export default Blog;
