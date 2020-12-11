import React,{ useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        margin:'auto',
        marginTop:'50px',
        maxWidth: 545,
        backgroundColor:'rgb(211, 227, 230)'
    },
    media: {
      height: 140,
    },
  });

const SinglePost = () => {

    const [post, setPost] = useState()
    const [error, setError] = useState(null)
    let { postID } = useParams()
    const classes = useStyles();
    useEffect(() => {
        if(!post){
            axios.get('http://localhost:3001/posts/'+postID)
                .then(res => setPost(res.data))
                .catch(err => setError(err.message))
        }
    }, [])

    return ( 
        error? <div>{error}</div>:
        !post? <h1>Loading...</h1>:
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={post.img}
            title={post.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {post.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      </Card>
    )
};

export default SinglePost;