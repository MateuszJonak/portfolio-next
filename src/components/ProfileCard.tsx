import React from 'react';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton, {
  IconButtonTypeMap,
  IconButtonProps,
} from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import { ExtendButtonBase } from '@material-ui/core/ButtonBase';
import styled from '@emotion/styled';
import { colors } from '../theme';
import { CardFragment } from '../graphql/queries/card.generated';
import { Maybe } from '../graphql/types.generated';

type Props = {
  card?: Maybe<CardFragment>;
  onClickExpand?: () => void;
};

const avatarWidth = 112;

export const ProfileCard: React.FC<Props> = ({ card, onClickExpand }) => {
  if (!card) {
    return null;
  }

  return (
    <>
      {card.avatar?.url && (
        <Box display="flex" justifyContent="center" mb={2}>
          <AvatarImage
            alt={card.name || 'Unknown name'}
            loader={({ src, width, quality }) =>
              `${src}?w=${width}&q=${quality || 75}`
            }
            src={card.avatar.url}
            layout="intrinsic"
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
      <Box color={colors.BLUE_GREEN} textAlign="center" mb={2}>
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
};

const AvatarImage = styled(Image)`
  border-radius: ${avatarWidth / 2}px;
`;

const IconButtonSmall = styled(IconButton)`
  width: 40px;
  height: 40px;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(1)}px;
  }
` as ExtendButtonBase<IconButtonTypeMap<IconButtonProps>>;
