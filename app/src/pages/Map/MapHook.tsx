import React, { useState, useEffect, useCallback } from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { positions } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "./App.css";
import 'leaflet/dist/leaflet.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: 
      {

      },
    
    button:{'& > *':  {
      margin: theme.spacing(1),
      width: "auto",
      height: '50%'
    }},
    map:{
      margin: 1,
      height: "100%"
    },
  }),
);


function MyComponent() {

  const classes = useStyles();

    return(
      <Typography
      component="div"
      variant="body1"
      style={{ height: 100, width: '100%', position: 'relative' }}
    >
         <Box width ="auto" >
         <Map center={[-23.3972861,-46.3912693]} zoom={15} className={classes.map}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-23.3972861,-46.3912693]}/>
            <div className={classes.button}>
            <Box p={2} bgcolor="background.paper">
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
            </Box>
            </div>
          </Map>
          </Box>
          </Typography>
            
              
            
        
        
      
    )
}
export default MyComponent