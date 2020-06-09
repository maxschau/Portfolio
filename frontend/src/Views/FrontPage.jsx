import React, { useState } from 'react';
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import {makeStyles} from "@material-ui/core/styles";
import Harmoni from "../Assets/Images/Harmoni.png";
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';





const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1%',
        width: "50%",
    },
    root2: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1%',
        width: "90%",
    },
    header: {
        textAlign: "center",
        fontFamily: "'Montserrat', sans-serif;",
    },
    imageBox: {
        marginTop: "5%",
        marginLeft: "5%",
    },
    image : {
        objectFit: "cover",
        height: "300px",
        display: "block",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            height: "300pxpx",
            objectFit: "cover",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }

    },
    textBox: {
        backgroundColor: "#C4C4C4",
        height: "300px",
        width: "100%",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height: "auto",
            width: "100%",
          }
    },
    header2: {
        fontSize: "20px",
        textAlign: "center",
        padding: "20px",
        fontFamily: "'Montserrat', sans-serif;"
    },
    links : {
        color: "black",
        margin: "auto",
    },
    linksbox: {
        margin: "auto",
        width: "20%",
    }
}));

function FrontPage() {
    const matches = useMediaQuery('(min-width:600px)');
    const Portrait = require("../Assets/Images/Portrett.jpg");
    console.log(matches);

    const classes = useStyles();
    return(
        <div>
            <Grid container className={matches ? classes.root : classes.root2}>
                <Grid item md={4}>
                    <img src={Portrait} alt="Portrait" className={classes.image} />
                </Grid>
                <Grid item md={8} className={classes.textBox}>
                    <Typography variant="h4" className={classes.header2}>
                        Full-stack-developer <br />Currently studying Computer Engineering at Norges teknisk-naturvitenskapelige universitet (NTNU) in Trondheim, Norway. 
                    </Typography>
                    <div className={classes.linksbox}>
                    <a className={classes.links} href="mailto:max.torre.schau@gmail.com" ><MailIcon fontSize={"large"} /></a>
                    <a className={classes.links} href="tel:+4791782159"><PhoneIcon fontSize={"large"}/></a>
                    </div>
                </Grid>


            </Grid>
            <Grid container spacing={3} className={matches ? classes.root : classes.root2}>
                <Grid item md={12}>
                    <Typography variant="h4" className={classes.header}>Projects:</Typography>
                </Grid>
                <Grid item md={6} >
                    <ProjectCard title={"Harmoni"} link={"https://github.com/maxschau/harmoni"} image={"Harmoni.png"} description={"A fun application created in the subject TDAT2003 Systemutvikling 2 med web-applikasjoner"} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"TwoPhase"} link={"https://github.com/maxschau/TwoPhaseCommit"}image={"TwoPhase.png"} description={"A visualizer of the algorithm TwoPhaseCommit showcasing its steps and features"} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"Squiggle"} link={"https://github.com/maxschau/squiggle"}image={"Squiggle.png"} description={"A game developed in the subject 'Databaser med videregående programmering'. Similar to drawsomething, but created in Java"} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"Portfolio"} link={"https://github.com/maxschau/Portfolio"}image={"Portfolio.png"} description={"A game developed in the subject 'Databaser med videregående programmering'. Similar to drawsomething, but created in Java"} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"Community-News"} link={"https://github.com/maxschau/"}image={"News.png"} description={"Webapplication created in React as a school project. The webpage displays the different articles, and lets you create new ones. Connected to MySQL-database."} />
                </Grid>
   

            </Grid>
        </div>
    )
}

export default FrontPage;