import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    container: {

    },
    image: {
        objectFit: "cover",
        width: "50px",
        opacity: "70%",
        '&:hover': {
            opacity: '100%'
        },
    }
}));

function ImageLink(props) {
    const imageURL = require("../../Assets/Images/" + props.image);
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {!props.disabled ? <a href={props.link} target="_blank"><img src={imageURL} alt="GitLink" className={classes.image} /></a> : <></>}
        </div>
    )
}

export default ImageLink;