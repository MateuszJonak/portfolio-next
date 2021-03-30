import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from '@emotion/styled';

type Props = { close?: () => void };

export const ProfileCV: React.FC<Props> = ({ close = () => {} }) => {
  return (
    <Card style={{ position: 'relative' }}>
      <CardContent>
        <Typography component="h1" variant="h2">
          Mateusz Jonak
        </Typography>
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
