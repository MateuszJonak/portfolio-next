import React from 'react';
import { Box, Grid, Typography } from '../MaterialUI';
import dayjs from 'dayjs';
import { getCV } from '../../../api/getCV';
import { ProfileCVImage } from './ProfileCVImage';

export default async function ProfileCV() {
  const cv = await getCV();

  if (!cv) {
    return null;
  }

  return (
    <>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box sx={{ width: 139, height: 176, position: 'relative' }}>
            <ProfileCVImage cv={cv} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Typography component="h2" variant="h2" sx={{ fontWeight: 100 }}>
            {cv.name}
          </Typography>
          <Typography component="h4" variant="h5" sx={{ fontWeight: 500 }}>
            {cv.role}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={12} sm={4} zeroMinWidth>
          <Typography>ABOUT ME</Typography>
          <Typography noWrap>
            Date of Birth: {dayjs(cv.dateOfBirth).format('YYYY MMM DD')}
          </Typography>
          <Typography>Age: {cv.age}</Typography>
          <Typography>Gender: {cv.gender}</Typography>
        </Grid>
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    </>
  );
}
