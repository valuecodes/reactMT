import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:'var(--text-light)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
      backgroundColor:'var(--primary-color)',
  },
  toolBar:{
      padding:0
  }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <div className='container'>
                    <Toolbar className={classes.toolBar}>
                    <Tabs>
                        <Tab label='Home' to='/' component={Link} />
                        <Tab label='Companies' to='/companies' component={Link} />
                        <Tab label='Add Company' to='/add_company' component={Link} />
                    </Tabs>
                        {/* <Button color="inherit">Home</Button>
                        <Button color="inherit">Companies</Button>
                        <Button color="inherit">Add Company</Button> */}
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>   */}
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    )
}
