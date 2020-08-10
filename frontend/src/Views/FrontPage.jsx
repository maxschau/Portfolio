import React from 'react';
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import Typewriter from 'typewriter-effect';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';






function FrontPage() {


    const matches = useMediaQuery('(min-width:600px)');
    const Portrait = require("../Assets/Images/Portrett.jpg");

    const classes = useStyles();
    return (
        <div>
            <div className={classes.headline}>
                <Typewriter
                    className={classes.headline}
                    onInit={(typewriter) => {
                        typewriter.typeString('Max Torre Schau, a designing genius')
                            .pauseFor(2000)
                            .deleteChars(18)
                            .start()
                        typewriter.typeString("an developer with a high passion for development")
                            .start()
                    }}
                />
            </div>

            <Grid container className={matches ? classes.root : classes.root2}>
                <Grid item md={4}>
                    <img src={Portrait} alt="Portrait" className={classes.image} />
                </Grid>
                <Grid item md={8} className={classes.textBox}>
                    <Typography variant="h4" className={classes.header2}>
                        Full-stack-developer <br /> <br />Currently studying Computer Engineering at Norges teknisk-naturvitenskapelige universitet (NTNU) in Trondheim, Norway.
                    </Typography>
                    <div className={classes.linksbox}>
                        <a className={classes.links} href="mailto:max.torre.schau@gmail.com" ><MailOutlineRoundedIcon fontSize={"large"} /></a>
                        <a className={classes.links} href="tel:+4791782159"><PhoneIcon fontSize={"large"} /></a>
                    </div>
                </Grid>


            </Grid>
            <Grid container spacing={3} className={matches ? classes.root : classes.root2}>
                <Grid item md={12}>
                    <Typography variant="h4" className={classes.header}>Projects:</Typography>
                </Grid>
                <Grid item md={6} >
                    <ProjectCard title={"Dissimilis"} disabled={true} link={"https://github.com/maxschau/harmoni"} image={"dissmilis.svg"} description={"During the summer of 2020 I worked as a summer intern at Experis Ciber in Oslo. Me and 5 others developed a web-application to use for color-notation. "} />
                </Grid>
                <Grid item md={6} >
                    <ProjectCard title={"Harmoni"} disabled={false} link={"https://github.com/maxschau/harmoni"} image={"Harmoni.png"} description={"A fun application created in the subject TDAT2003 Systemutvikling 2 med web-applikasjoner"} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"TwoPhase"} disabled={false} link={"https://github.com/maxschau/TwoPhaseCommit"} image={"TwoPhase.png"} description={"A visualizer of the algorithm TwoPhaseCommit showcasing its steps and features"} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"Squiggle"} disabled={false} link={"https://github.com/maxschau/squiggle"} image={"Squiggle.png"} description={"A game developed in the subject 'Databaser med videregående programmering'. Similar to drawsomething, but created in Java"} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"Portfolio"} disabled={false} link={"https://github.com/maxschau/Portfolio"} image={"Portfolio.png"} description={"Portfolio developed to showcase the different projects I have been working on (individual and in teams). "} />
                </Grid>
                <Grid item md={6}>
                    <ProjectCard title={"Community-News"} disabled={false} link={"https://github.com/maxschau/Community-News"} image={"News.png"} description={"Webapplication created in React as a school project. The webpage displays the different articles, and lets you create new ones. Connected to MySQL-database."} />
                </Grid>


            </Grid>
        </div>
    )
}

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
    image: {
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
        backgroundColor: "#7f7f7f",
        height: "300px",
        width: "100%",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height: "auto",
            width: "100%",
        }
    },
    textBox2: {
        backgroundColor: "#7f7f7f",
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
        fontFamily: "'Montserrat', sans-serif;",
        color: "white",
    },
    links: {
        marginRight: "4px",
        color: "white",
    },
    linksbox: {
        margin: "auto",
        width: "20%",
        padding: "8px",
    },
    headline: {
        margin: "1% auto auto auto",
        width: "50%",
        display: "block",
        fontSize: "20px",
        ['@media (max-width:600px)']: {
            margin: "auto",
            width: "90%",
            display: "block"
        }
    }
}));


export default FrontPage;