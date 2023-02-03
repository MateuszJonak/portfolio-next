'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton, {
  IconButtonTypeMap,
  IconButtonProps,
} from '@mui/material/IconButton';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from 'next/image';
import styled from '@emotion/styled';
import { AssetFragmentDoc, CardFragmentDoc } from '../../gql/graphql';
import { FragmentType, getFragmentData } from '../../gql/fragment-masking';

type Props = {
  onClickExpand?: () => void;
  card: FragmentType<typeof CardFragmentDoc> | null;
};

export const avatarWidth = 112;

export default function ProfileCard({ onClickExpand, card: cardProp }: Props) {
  const card = getFragmentData(CardFragmentDoc, cardProp);
  const avatarAsset = getFragmentData(AssetFragmentDoc, card?.avatar);
  if (!card) {
    return null;
  }

  return (
    <>
      {avatarAsset?.url && (
        <Box display="flex" justifyContent="center" mb={2}>
          <AvatarImage
            alt={card.name || 'Unknown name'}
            loader={({ src, width, quality }) =>
              `${src}?w=${width}&q=${quality || 75}&fm=webp`
            }
            src={avatarAsset.url}
            width={avatarWidth}
            height={avatarWidth}
            priority
          />
        </Box>
      )}
      <Box textAlign="center">
        <Typography component="h1" variant="h4" noWrap>
          {card.name}
        </Typography>
      </Box>
      <Box my={2}>
        <Divider />
      </Box>
      <Box textAlign="center" mb={2}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
          sx={{ fontWeight: 400 }}
          noWrap
        >
          {card.role}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <IconButtonSmall onClick={onClickExpand} title="Curriculum vitae">
          <DescriptionIcon htmlColor="#ffb74d" />
        </IconButtonSmall>
        <IconButtonSmall
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MateuszJonak"
          title="Github Profile"
        >
          <GitHubIcon htmlColor="#FFFFFF" />
        </IconButtonSmall>
        <IconButtonSmall
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mateusz-jonak"
          title="Linkedin Profile"
          color="primary"
        >
          <LinkedInIcon />
        </IconButtonSmall>
      </Box>
    </>
  );
}

export const AvatarImage = styled(Image)`
  border-radius: ${avatarWidth / 2}px;
`;

export const IconButtonSmall = styled(IconButton)`
  width: 40px;
  height: 40px;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(1)}px;
  }
` as ExtendButtonBase<IconButtonTypeMap<IconButtonProps>>;
