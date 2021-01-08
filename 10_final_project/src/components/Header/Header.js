import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
  },
  indicator: {
    backgroundColor: 'white',
  },
}));

export default function Header() {
    const [tab,setTab]=useState(0)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <div className='container'>
                    <Toolbar className={classes.toolBar}>
                    <Tabs    classes={{indicator: classes.indicator}} value={tab}>
                        <Tab onClick={()=>setTab(0)} id={0} label='Home' to='/' component={Link} />
                        <Tab onClick={()=>setTab(1)}  id={1} label='Companies' to='/companies' component={Link} />
                        <Tab onClick={()=>setTab(2)}  id={2} label='Add Company' to='/add_company' component={Link} />
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
