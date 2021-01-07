import React,{ useState } from 'react'
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl:{
        width:'100%'
    }
  }));
  

export default function AddCompany() {

    const classes = useStyles();

    const [newCompany,setNewCompany] = useState({
        name:'',
        sector:'',
        employees:[]
    })

    const [newEmp,setNewEmp] = useState({
        name:'',
        position:''
    })

    const changeValueHandler = (e) => {
        setNewCompany({
          ...newCompany,
          [e.target.name]: e.target.value,
        });
    };
    const changeEmpHandler = (e) => {
        setNewEmp({
          ...newEmp,
          [e.target.name]: e.target.value,
        });
    };
    
    const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("https://json-server-react.herokuapp.com/companies", newCompany,  {
        headers:  { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then((response) => {
            alert('Company added succesfully!')
        })
        .catch(err => console.log(err));
    };

    const addEmpHandler = () =>{
        let newCompanyCopy = {...newCompany}
        newCompanyCopy.employees.push(newEmp)
        setNewCompany(newCompanyCopy)
    }

    const sectors=['Information Technology','Health Care','Financials','Consumer Discretionary','Communication Services','Industrials','Consumer Staples','Energy','Utilities','Real Estate','Materials']

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add new Company
            </Typography>
            <div className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={changeValueHandler}
              />
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Sector</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="sector"
                required
                value={newCompany.sector}
                onChange={changeValueHandler}
                >                
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {sectors.map(item =>
                        <MenuItem value={item}>{item}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <h2>Employees</h2>
            <List component="nav" aria-label="secondary mailbox folders">
                {newCompany.employees.map((item,index) =>
                    <ListItem key={index} button>
                        <ListItemText primary={item.name} />
                        <ListItemText primary={item.position} />
                    </ListItem>        
                )}
            </List>
            <div className='employees'>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    onChange={changeEmpHandler}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="position"
                    label="Position"
                    name="position"
                    autoComplete="position"
                    onChange={changeEmpHandler}
                />    
                <Button  onClick={addEmpHandler} variant="outlined" color="primary">Add Employee</Button>            
            </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={addPostHandler}
              >
                Add new Company
              </Button>
            </div>
          </div>
        </Container>
        </form>
    )
}
