import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import ImageLink from "../ImageLink/ImageLink.js";
import { Box, Divider, useMediaQuery } from '@material-ui/core';



function ProjectCard(props) {

    const imageURL = require("../../Assets/Images/" + props.image);
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:900px)'); //if true => bigger than 600px


    return (
        <Box width="100%" display="flex" padding="8px" mb="40px" mt="16px">
            <Box flex="1" display="flex" mr={matches ? "0px" : "12px"}>
                <img src={imageURL} alt={"Hello"} className={classes.image} />
            </Box>
            <Box flex="4" textAlign="left" >
                <Typography variant="h5" style={{ color: "#281862" }}>
                    {props.title}
                </Typography>
                <Box textAlign="left">
                    <Typography variant="body1">
                        {props.description}
                    </Typography>
                </Box>
                <Box textAlign="left">
                    <ImageLink disabled={props.disabled} image={"GitHub.png"} link={props.link} className={classes.link} />
                    {!props.link2 ? <></> : <div>
                        <a className={classes.link} href={props.link2} target="_blank">Article</a>
                    </div>}
                </Box>

            </Box>
        </Box>
    )

    /*
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
                
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} style={{marginTop: "8px", marginLeft: "8px"}}>
                    <Grid container>
                        {props.tags.map((tag) => {
                            return(
                                <Grid item xs={3} style={{marginRight: "4px"}}>
                                    <Box style={{backgroundColor: getColor(tag)}} className={classes.tag}>
                                        {tag}
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
           
            </Grid >


        </div >
    )
    */
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
        width: "120px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)"
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
        opacity: "70%",
        fontWeight: "bold",
        '&:hover': {
            opacity: '100%'
        },
    },
    tag: {
        width: "100%",
        borderRadius: "5px",
    }
}));

export default ProjectCard;