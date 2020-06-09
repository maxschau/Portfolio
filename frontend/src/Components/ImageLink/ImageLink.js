import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
    },
    image: {
        width: "30%",
    }
}));

function ImageLink(props) {
    const imageURL =  require("../../Assets/Images/" + props.image);

    const classes = useStyles();
    return (
        <div className={classes.container}>
        <a href={props.link} target="_blank"><img src={imageURL} alt="GitLink" className={classes.image} /></a>
    
        </div>
    )
}

export default ImageLink;