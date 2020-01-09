import React, {Component} from "react";
import NavBar from "./PrimarySearchAppBar";
import OnConstruction from "./OnConstruction";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ImageUploader from "react-images-upload";
import {useState} from "react"
import "./upload.css"
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {createNotification} from "./PopUpMessage"
import garbage_collector from "../media/garbage_collector.jpg"
import Chat from "./SetChat"

const messages = [
    {
      id: 1,
      primary: 'Ahmed',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: garbage_collector,
    },
    {
      id: 2,
      primary: 'Ali',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
      person: garbage_collector,
    },
    {
      id: 3,
      primary: 'Markov',
      secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
      person: garbage_collector,
    },
    {
      id: 4,
      primary: 'Omar',
      secondary: 'I have the tickets to the ReactConf for this year.',
      person: garbage_collector,
    },
    {
      id: 5,
      primary: "Khalil",
      secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
      person: garbage_collector,
    },
    {
      id: 6,
      primary: 'Hassen',
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
      person: garbage_collector,
    },
    {
      id: 7,
      primary: 'Aladin',
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
      person: garbage_collector,
    },
  ];

const useStyles = makeStyles(theme=>({
  card: {
    maxWidth: "53%",
    maxHeight: "70%",
    overflow:"auto",
    minHeight: "300px",
    minWidth: "300px",
   position: "relative",
   left: "25%",
    top:"30px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    '& > *': {
        margin: theme.spacing(1),
        width: 450,
        marginLeft:93
      },
  },
  pos: {
    marginBottom: 12,
  },
  fabButton: {
    position: 'relative',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));
export default function ServiceRecruiter() {
    const classes = useStyles();
    const [pictures,setPictures]=useState([]);
    const [chatMode,setChatMode]=useState(false);
    const onDrop=(pictureFiles, pictureDataURLs)=> {
        let pics=pictures;
        pics.push(pictureFiles)
         setPictures(pics)
      }
    const goChat=()=>{
        let newchatMode=!chatMode;
        setChatMode(newchatMode);
    }
    if(chatMode){
        return (
            <React.Fragment>
                <NavBar goChat={goChat} write={true} />
                <div style={{width:"50%",marginLeft:"25%"}}>
                <Chat chat={messages} /></div>
            </React.Fragment>
        )
    }
    return (
      <React.Fragment>  
      <NavBar goChat={goChat} write={true}/>

      <div>
      <Card className={classes.card} variant="outlined">
        <CardContent>
        <h2 style={{marginLeft:93}}>Create a post</h2>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <TextField id="outlined-basic" multiline rows="4" label="description" variant="outlined" />
          </Typography>
          <Typography variant="h5" component="div">
            <div style={{display:"inline-block",marginLeft:93}}>
                <TextField id="outlined-basic" label="price(dh)" variant="outlined" />
            </div>
            <div style={{display:"inline-block",marginLeft:10}}>
                <TextField id="outlined-basic" label="delay" variant="outlined" />
            </div>
            <br/>
            <div style={{display:"inline-block",marginTop:10,marginLeft:93}}>
                <TextField id="outlined-basic" label="city" variant="outlined" />
            </div>
            <div style={{display:"inline-block",marginTop:10,marginLeft:10}}>
                <TextField id="outlined-basic" label="type" variant="outlined" />
            </div>
            <br/>
            <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    label=""
                    buttonText="Upload Images"
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                    maxFileSize={1048576}
                    fileSizeError=" file size is too big"
                />
          </Typography>
        </CardContent>
        <CardActions>
          
        <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={createNotification('success','Well created','your post was created')}>
            <AddIcon />
          </Fab>
        </CardActions>
      </Card>
      <NotificationContainer/>
      </div>
      </React.Fragment>
    );
  }