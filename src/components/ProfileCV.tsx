import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import styled from '@emotion/styled';
import { useGetCvLazyQuery } from '../graphql/queries/cv.generated';
import { useProfileCard } from '../graphql/hooks/useProfileCard';

type Props = {
  close?: () => void;
};

export const ProfileCV: React.FC<Props> = ({ close = () => {} }) => {
  const card = useProfileCard();
  const [requestCV, { data }] = useGetCvLazyQuery();
  useEffect(() => {
    const id = card?.cv?.sys?.id;
    if (id) {
      requestCV({ variables: { id } });
    }
  }, [card, requestCV]);

  if (!data?.cv) {
    return null;
  }

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: 5 }}>
        <Box>
          <Typography component="h2" variant="h2" sx={{ fontWeight: 100 }}>
            {data.cv.name}
          </Typography>
          <Typography component="h4" variant="h5" sx={{ fontWeight: 500 }}>
            {data.cv.role}
          </Typography>
        </Box>
      </CardContent>
      <CloseButton aria-label="close" size="small" onClick={close}>
        <CloseIcon />
      </CloseButton>
    </Card>
  );
};

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`;
