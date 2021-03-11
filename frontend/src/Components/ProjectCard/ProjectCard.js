import { Box, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import ImageLink from '../ImageLink/ImageLink.js';

function ProjectCard(props) {
  const imageURL = require(`../..//Assets/Images/${props.image}`);
  console.log(imageURL);
  console.log("hei")
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)'); 
  return (
    <Box display='flex' mb='40px' mt='16px' padding='8px' width='100%'>
      <Box display='flex' flex='1' mr={matches ? '0px' : '12px'}>
        <img alt={'Hello'} className={classes.image} src={imageURL.default} />
      </Box>
      <Box flex='4' textAlign='left'>
        <Typography style={{ color: '#281862' }} variant='h5'>
          {props.title}
        </Typography>
        <Box textAlign='left'>
          <Typography variant='body1'>{props.description}</Typography>
        </Box>
        <Box textAlign='left'>
          <ImageLink className={classes.link} disabled={props.disabled} image={'GitHub.png'} link={props.link} />
          {!props.link2 ? (
            <></>
          ) : (
            <div>
              <a className={classes.link} href={props.link2} target='_blank'>
                Article
              </a>
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '25px',
    height: 'auto',
    opacity: '100%',
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    width: '100%',
    padding: '4px',
  },
  box: {
    height: '200px',
  },
  image: {
    objectFit: 'cover',
    height: '120px',
    width: '120px',
    ['@media (max-width:600px)']: {
      // eslint-disable-line no-useless-computed-key
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  title: {
    fontSize: '40px',
    ['@media (max-width:600px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: '35px',
    },
  },
  description: {
    fontSize: '12px',
    textAlign: 'left',
    marginLeft: '8px',
    ['@media (max-width:600px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: '15px',
    },
  },
  link: {
    color: 'black',
    opacity: '70%',
    fontWeight: 'bold',
    '&:hover': {
      opacity: '100%',
    },
  },
  tag: {
    width: '100%',
    borderRadius: '5px',
  },
}));

export default ProjectCard;
