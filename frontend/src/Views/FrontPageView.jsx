import React, { useState } from 'react';
import { Box, Grid, makeStyles, Typography, Tabs, Tab, useMediaQuery } from '@material-ui/core';
import "./animatedHand.css";
import PropTypes from 'prop-types';
import { education } from "../education.js";
import EducationCard from '../Components/EducationCard/EducationCard';
import { projects } from "../projects.js";
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export const FrontPageView = props => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)'); //if true => bigger than 600px
    const matchesXS = useMediaQuery('(min-width:350px)');

    const Portrait = require("../Assets/Images/Portrett.jpg");

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Grid container className={classes.content}>
                                <Grid item xs={12} sm={9} style={{ color: "white" }} className={classes.infoBox}>
                                    <Typography variant="h6">
                                        Hello <span role="img" aria-label="waving hand" class="wave">👋</span>
                                    </Typography>
                                    <Typography variant="h4">
                                        I'm Max Torre Schau
                                    </Typography>
                                    <Box width="25%" borderTop="2px solid white" marginTop="8px"></Box>
                                    <Box mt="16px">
                                        <Typography variant="h7">
                                            Full-stack developer <br />
                                            Currently studying Computer Engineering at Norges teknisk-naturvitenskapelige universitet
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={3} className={classes.pictureBox}>
                                    <img src={Portrait} alt="Portrait" className={classes.image} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ height: "400px", marginTop: "64px", backgroundColor: "white" }}>
                    <Grid container style={{ marginTop: matches ? "32px" : "8px" }}>
                        <Grid xs={matches ? 2 : 1}></Grid>
                        <Grid xs={matches ? 8 : 10} style={{
                            border: "1px solid white", color: "black", textAlign: "center"
                        }}>
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary" centered style={{ marginTop: "8px", backgroundColor: "#281862", color: "white" }}>
                                <Tab style={{ fontSize: matchesXS ? "14px" : "10px" }} label="Education" {...a11yProps(0)} />
                                <Tab style={{ fontSize: matchesXS ? "14px" : "10px" }} label="About me" {...a11yProps(1)} />
                                <Tab style={{ fontSize: matchesXS ? "14px" : "10px" }} label="Projects" {...a11yProps(2)} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <Box>
                                    {education.map((edu) => {
                                        return (
                                            <EducationCard school={edu.school} year={edu.year} degree={edu.degree} />
                                        )
                                    })}
                                </Box>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Box>
                                    <Box textAlign="left" paddingLeft="8px" paddingRight="8px" mt="16px">
                                        <Typography variant="body1">
                                            I'm a 22 year old man from Oslo with a great passion about coding. I have always been interested in computers, but started with development/coding in 2015. And I have not been looking back since.
                                            Currenly I'm spending my time as a full-time-student at NTNU, while working as a teaching assistant in the subjects Databases and Introductory Programming for Teachers.
                                        </Typography>
                                        <br />
                                        <Typography variant="h6">
                                            Interests:
                                        </Typography>
                                        <SportsSoccerIcon fontSize="large" />
                                        <SportsHandballIcon fontSize="large" />
                                        <LocalCafeIcon fontSize="large" />
                                        <LocalAirportIcon fontSize="large" />
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Box>
                                    {projects.map((project) => {
                                        return (
                                            <ProjectCard tags={project.tags} link2={project.link2} title={project.title} disabled={project.disabled} link={project.link} image={project.image} description={project.description} />
                                        )
                                    })}
                                </Box>
                            </TabPanel>
                        </Grid>
                        <Grid xs={matches ? 2 : 1}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

const useStyles = makeStyles({
    root: {
        backgroundColor: "#281862"
    },
    content: {
        margin: "80px auto auto",
        height: "auto",
        '@media (max-width: 900px)': {
            margin: "20px auto auto",
        }
    },
    image: {
        objectFit: "cover",
        width: "200px",
        height: "200px",
        '@media (max-width: 600px)': {
            width: "100%",
            height: "300px"
        }
    },
    infoBox: {
        order: 1,
        '@media (max-width: 600px)': {
            order: 2,
        }

    },
    pictureBox: {
        order: 2,
        '@media (max-width: 600px)': {
            order: 1,
        }
    },
    textBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FrontPageView;