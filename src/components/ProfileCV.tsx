import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { CvFragment } from '../graphql/queries/cv.generated';
import Image from 'next/image';
import { Maybe } from '../graphql/types.generated';

type Props = {
  cv?: Maybe<CvFragment>;
};

export const ProfileCV: React.FC<Props> = ({ cv }) => {
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
            {cv.photo?.url && (
              <Image
                alt={cv.name || 'Unknown name'}
                loader={({ src, width, quality }) =>
                  `${src}?w=${width}&q=${quality || 75}`
                }
                src={cv.photo?.url}
                layout="fill"
                objectFit="cover"
                priority
              />
            )}
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
        <Grid item xs={12} sm={4}>
          <Typography>ABOUT ME</Typography>
          <Typography>Date of Birth: {cv.dateOfBirth}</Typography>
          <Typography>Age: {cv.age}</Typography>
          <Typography>Gender: {cv.gender}</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography>PROFESSIONAL EXPIRIENCE</Typography>
          <Typography>SENIOR SOFTWARE ENGINEER</Typography>
        </Grid>
      </Grid>
    </>
  );
};
