import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bulletinpage.scss';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function Bulletinpage() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
        <Typography variant="h2" component="h3" align="center">
          Bulletin Board
        </Typography>
      </header>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcom to the Bulletin Board! <br />
          This is where all the updates for the quarantine center are posted.
          Make sure to check back frequently for the latest news. 
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="secondary">
              Call Nurse
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Chat Page
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Bulletinpage;
