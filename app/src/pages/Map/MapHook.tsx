import React, { useState, useEffect, useCallback } from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);


function MyComponent() {

  const classes = useStyles();

    return(
         <Map center={[-23.3972861,-46.3912693]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-23.3972861,-46.3912693]}/>
            <div className={classes.root}>
            <TextField id="outlined-basic" label="Bus Stop Title" variant="outlined" />
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
        Save
      </Button>
            </div>
          </Map>
            
              
            
        
        
      
    )
}
export default MyComponent