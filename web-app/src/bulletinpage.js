import React from 'react';
import './App.css';
import './bulletinpage.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Bulletinpage() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewEntry = () =>{

  };

  return (
    <div className="App">
      <Container maxWidth="Md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcome to the Bulletin Board! <br />
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
            <IconButton aria-label="add" onClick={handleClickOpen}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
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

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <DialogTitle id="form-dialog-title">New Bulletin Entry</DialogTitle>

        <DialogContent>
          <DialogContentText>
            To add a new entry to the bulletin board, please enter the required
            information below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          
        </DialogContent>
        
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="heading"
            label="Heading"
            type="text"
            fullWidth
          />
        </DialogContent>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleNewEntry} color="primary">
            Subscribe
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}

export default Bulletinpage;
