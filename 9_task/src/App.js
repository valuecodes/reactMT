import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/> 
      <Container maxWidth="l">
        <Typography component="div" style={{ height: '100vh' }} >
          <Main/> 
        </Typography>
      </Container>
    </Router>
  );
};

export default App;