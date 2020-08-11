import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import ImageLink from "../ImageLink/ImageLink.js";



function ProjectCard(props) {

    const imageURL = require("../../Assets/Images/" + props.image);
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container spacing={12}>
                <Grid item xs={12} md={12} style={{ marginTop: "8px" }}>
                    <img src={imageURL} alt={"Hello"} className={classes.image} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" className={classes.title}>{props.title}</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="subtitle1" className={classes.description}>{props.description} </Typography>
                </Grid>
                <Grid item xs={6} md={6} style={{ textAlign: "left", marginLeft: "8px" }}>
                    <ImageLink disabled={props.disabled} image={"GitHub.png"} link={props.link} className={classes.link} />
                    {!props.link2 ? <></> : <div>
                        <a className={classes.link} href={props.link2} target="_blank">Article</a>
                    </div>}
                </Grid>
            </Grid>


        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '25px',
        height: "auto",
        opacity: '100%',
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        width: "100%",
        padding: "4px",
    },
    box: {
        height: "200px",
    },
    image: {
        objectFit: "cover",
        height: "120px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            heigth: "50%",
        }
    },
    title: {
        fontSize: "40px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: "35px",
        }
    },
    description: {
        fontSize: "12px",
        textAlign: "left",
        marginLeft: "8px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: "15px",
        }
    },
    link: {
        color: "black",
    }
}));

export default ProjectCard;