import './animatedHand.css';

import { Box, Grid, makeStyles, Tab, Tabs, Typography, useMediaQuery } from '@material-ui/core';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PropTypes from 'prop-types';
import React from 'react';

import EducationCard from '../components/EducationCard/EducationCard';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { education } from '../education.js';
import { projects } from '../projects.js';
import getAge from "get-age";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div aria-labelledby={`simple-tab-${index}`} hidden={value !== index} id={`simple-tabpanel-${index}`} role='tabpanel' {...other}>
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
export const FrontPageView = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const matchesXS = useMediaQuery('(min-width:350px)');

  const portrait = require('../Assets/Images/portrett2.jpg');
  const age = getAge("1997-12-12");

  const [choosenTab, setChoosenTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setChoosenTab(newValue);
  };

  return (
    <Box>
      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Grid className={classes.content} container>
                <Grid className={classes.infoBox} item sm={9} style={{ color: 'white' }} xs={12}>
                  <Typography variant='h6'>
                    Hello{' '}
                    <span aria-label='waving hand' className='wave' role='img'>
                      👋
                    </span>
                  </Typography>
                  <Typography variant='h4'>Max Torre Schau</Typography>
                  <Box borderTop='2px solid white' marginTop='8px' width='25%'></Box>
                  <Box mt='16px'>
                    <Typography variant='h7'>
                      Full-stack developer <br />
                      Currently studying Computer Science at Norges teknisk-naturvitenskapelige universitet
                    </Typography>
                  </Box>
                </Grid>
                <Grid className={classes.pictureBox} item sm={3} xs={12}>
                  <img alt='Portrait' className={classes.image} src={portrait.default} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
        <Grid item style={{ height: '400px', marginTop: '64px', backgroundColor: 'white' }} xs={12}>
          <Grid container style={{ marginTop: matches ? '32px' : '8px' }}>
            <Grid xs={matches ? 2 : 1}></Grid>
            <Grid
              style={{
                border: '1px solid white',
                color: 'black',
                textAlign: 'center',
              }}
              xs={matches ? 8 : 10}>
              <Tabs
                aria-label='simple tabs example'
                centered
                indicatorColor='primary'
                onChange={handleChange}
                style={{ marginTop: '8px', backgroundColor: '#281862', color: 'white' }}
                value={choosenTab}>
                <Tab label='Education' style={{ fontSize: matchesXS ? '14px' : '10px' }} {...a11yProps(0)} />
                <Tab label='About me' style={{ fontSize: matchesXS ? '14px' : '10px' }} {...a11yProps(1)} />
                <Tab label='Projects' style={{ fontSize: matchesXS ? '14px' : '10px' }} {...a11yProps(2)} />
              </Tabs>
              <TabPanel index={0} value={choosenTab}>
                <Box>
                  {education.map((edu) => {
                    return <EducationCard degree={edu.degree} key={edu.degree} school={edu.school} year={edu.year} />;
                  })}
                </Box>
              </TabPanel>
              <TabPanel index={1} value={choosenTab}>
                <Box>
                  <Box mt='16px' paddingLeft='8px' paddingRight='8px' textAlign='left'>
                    <Typography variant='body1'>
                      {`I am a ${age} year old man from Oslo with a great passion about coding. I have always been interested in computers, but started with
                      development/coding in 2015. And I have not been looking back since. Currently spending my time as a full-time-student at NTNU, while
                      working as a teaching assistant in the subjects Applied Programming for Teachers and Basic programmeing with Python I have also been an
                      teaching assistant in the subjects Programming 1, Programming 2, Databases and Introductory Programming for Teachers.`}
                    </Typography>
                    <br />
                    <Typography variant='h6'>Interests:</Typography>
                    <SportsSoccerIcon fontSize='large' />
                    <SportsHandballIcon fontSize='large' />
                    <LocalCafeIcon fontSize='large' />
                    <LocalAirportIcon fontSize='large' />
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel index={2} value={choosenTab}>
                <Box>
                  {projects.map((project) => {
                    return (
                      <ProjectCard
                        description={project.description}
                        disabled={project.disabled}
                        image={project.image}
                        key={project.title}
                        link={project.link}
                        link2={project.link2}
                        tags={project.tags}
                        title={project.title}
                      />
                    );
                  })}
                </Box>
              </TabPanel>
            </Grid>
            <Grid xs={matches ? 2 : 1}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: '#281862',
  },
  content: {
    margin: '80px auto auto',
    height: 'auto',
    '@media (max-width: 900px)': {
      margin: '20px auto auto',
    },
  },
  image: {
    objectFit: 'cover',
    width: '200px',
    height: '200px',
    '@media (max-width: 600px)': {
      width: '100%',
      height: '300px',
    },
  },
  infoBox: {
    order: 1,
    '@media (max-width: 600px)': {
      order: 2,
    },
  },
  pictureBox: {
    order: 2,
    '@media (max-width: 600px)': {
      order: 1,
    },
  },
  textBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FrontPageView;
