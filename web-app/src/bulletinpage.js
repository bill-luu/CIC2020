import React, {useState, useEffect} from 'react';
import './App.css';
import './bulletinpage.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import firebase from 'firebase/app';
import 'firebase/auth';

function Bulletinpage() {
  
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleNewEntry = () =>{
    
  };
  
  const [facilityName, setFacilityName] = useState("")
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase.firestore().collection("users").doc(user.uid).get().then((userDoc) => {
          firebase.firestore().collection("facilities").doc(userDoc.data().facilityID).get().then((doc) => {
            if(doc.exists) {
              setFacilityName(doc.data().Name)
            }
          })
        })
      }
    });

    return (() => {
      unsubscribe()
    })
  }, [])

  const [bulletinPosts, setBulletinPosts] = useState([])
  useEffect(() => {
    firebase.firestore().collection("bulletinposts").get().then((querySnapshot) => {
      let posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({
          // timestamp: doc.data().timestamp,
          author: doc.data().author,
          content: doc.data().content,
          title: doc.data().title,
        })
      })

      setBulletinPosts(posts)
    })
  }, [])

  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcome to {facilityName} <br />
          This is where all the updates for the quarantine center are posted.
          Make sure to check back frequently for the latest news. 
        </Typography>

        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button size="large" variant="contained" color="secondary">
              Call Nurse
            </Button>
          </Grid>
          {/* <Grid item>
            <Button size ="large" variant="contained" color="primary">
              Chat Page
            </Button>
          </Grid> */}
          {/* <Grid item>
            <IconButton aria-label="add" onClick={handleClickOpen}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Grid> */}
        </Grid>

        <List width="100%">
          {bulletinPosts.map((post, index) => {
            // const displaytime = moment(post.timestamp).format("h:mm A")
            return (
            <ListItem button alignItems="flex-start" key={"post" + index}>
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      display="inline"
                      color="textPrimary"
                    >
                      {post.author}
                    </Typography>
                    {" — " + post.content}
                  </React.Fragment>
                }
              />
              </ListItem>
            )
          })}
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
