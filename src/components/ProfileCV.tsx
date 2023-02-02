import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import dayjs from 'dayjs';
import { FragmentType, useFragment } from '../gql/fragment-masking';
import { AssetFragmentDoc, CvFragmentDoc } from '../gql/graphql';

type Props = {
  cv?: FragmentType<typeof CvFragmentDoc> | null;
};

export const ProfileCV: React.FC<Props> = ({ cv: cvProp }) => {
  const cv = useFragment(CvFragmentDoc, cvProp);
  const photoAsset = useFragment(AssetFragmentDoc, cv?.photo);
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
            {photoAsset?.url && (
              <Image
                alt={cv.name || 'Unknown name'}
                loader={({ src, width, quality }) =>
                  `${src}?w=${width}&q=${quality || 75}&fm=webp`
                }
                src={photoAsset?.url}
                fill
                sizes="(max-width: 428px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
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
};
