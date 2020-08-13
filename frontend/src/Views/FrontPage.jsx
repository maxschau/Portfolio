import React from 'react';
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import Typewriter from 'typewriter-effect';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import Divider from '@material-ui/core/Divider';
import { projects } from "../projects.js";






function FrontPage() {


    const matches = useMediaQuery('(min-width:600px)');
    const Portrait = require("../Assets/Images/Portrett.jpg");
    const classes = useStyles();
    return (
        <div>
            <Grid container className={matches ? classes.root : classes.root2}>
                <Grid item md={4}>
                    <img src={Portrait} alt="Portrait" className={classes.image} />
                </Grid>
                <Grid item md={8} className={classes.textBox}>
                    <Typography variant="h4" className={classes.header2}>
                        Full-stack-developer
                    </Typography>
                    <Divider />
                    <Typography variant="h4" className={classes.header2}>
                        Currently studying Computer Engineering at Norges teknisk-naturvitenskapelige universitet (NTNU) in Trondheim, Norway.
                    </Typography>
                    <Divider />
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
                {projects.map((project) => {
                    return (
                        <Grid item md={6}>
                            <ProjectCard tags={project.tags} link2={project.link2} title={project.title} disabled={project.disabled} link={project.link} image={project.image} description={project.description} />
                        </Grid>
                    )
                })}
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
        fontFamily: "'Roboto', sans-serif",
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
        fontFamily: "'Roboto', sans-serif",
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
        '@media (max-width:600px)': {
            width: "90%",
        }
    }
}));


export default FrontPage;