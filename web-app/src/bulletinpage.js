import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bulletinpage.scss';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

function Bulletinpage() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
        <Typography variant="h2" component="h3" align="center">
          Bulletin Board
        </Typography>
      </header>

      <Container maxWidth="Md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcom to the Bulletin Board! <br />
          This is where all the updates for the quarantine center are posted.
          Make sure to check back frequently for the latest news. 
        </Typography>

        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button size="large" variant="contained" color="secondary">
              Call Nurse
            </Button>
          </Grid>
          <Grid item>
            <Button size ="large" variant="contained" color="primary">
              Chat Page
            </Button>
          </Grid>
          <Grid item>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Grid>
        </Grid>

        <List width="100%">
          <ListItem button alignItems="flex-chart">
            <ListItemText
              primary="We are out of Toilet Paper!"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    display="inline"
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — Please ask your loved ones to bring in more toilet paper"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem button alignItems="flex-chart">
            <ListItemText
              primary="New protocols for visiting family members"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    display="inline"
                    color="textPrimary"
                  >
                    Admin Team
                  </Typography>
                  {" — From now on family members are required to ..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem button alignItems="flex-chart">
            <ListItemText
              primary="Reduction in new cases globally"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    display="inline"
                    color="textPrimary"
                  >
                    Paul Robertson
                  </Typography>
                  {" — Global pandemic levels have been decreasing over the ...."}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Container>
    </div>
  );
}

export default Bulletinpage;
