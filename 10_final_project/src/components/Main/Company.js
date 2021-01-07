import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import { useRouteMatch, Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  header:{
    fontSize:30
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  CardActions:{
    display:'flex',
    justifyContent:'flex-end'
  }
}));

export default function Company({company}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let { path, url } = useRouteMatch()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let link =`${url}/${company.id}`
  return (
    <Card className={`${classes.root} company`}>
      <CardHeader
        className={classes.header}
        title={company.name}
        action={
          <IconButton aria-label="settings">
            <PhoneIcon />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={`https://source.unsplash.com/1600x900/?${company.sector}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="primary">
        Sector: {company.sector}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {`Employees: ${company.employees.length}`}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions} disableSpacing>
        <Tab label='Read more' to={link} component={Link} />
      </CardActions>
    </Card>
  );
}