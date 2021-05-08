import React from 'react';
import { Box, Typography } from '@material-ui/core';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SchoolIcon from '@material-ui/icons/School';

export const EducationCard = (props) => {
  return (
    <Box width='100%' textAlign='left' style={{ color: 'black' }} mt='16px' mb='32px' ml='8px'>
      <Typography variant='h5' style={{ color: '#281862', marginBottom: '12px' }}>
        {props.school}
      </Typography>
      <Box display='flex' alignItems='center' mb='8px'>
        <QueryBuilderIcon style={{ display: 'block' }} />
        <Typography variant='body1' style={{ paddingLeft: '16px' }}>
          {props.year}
        </Typography>
      </Box>
      <Box display='flex' alignItems='center'>
        <SchoolIcon />
        <Typography variant='body1' style={{ paddingLeft: '16px' }}>
          {props.degree}
        </Typography>
      </Box>
    </Box>
  );
};

export default EducationCard;
