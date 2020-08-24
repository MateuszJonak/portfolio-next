import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import IconButton, {
  IconButtonTypeMap,
  IconButtonProps,
} from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import { ExtendButtonBase } from '@material-ui/core/ButtonBase';
import { styled, colors } from '../theme';
import { CardFragment } from '../graphql/queries/card.generated';

type Props = {
  card: CardFragment;
};

const avatarWidth = 112;

export const ProfileCard: React.FC<Props> = ({ card }) => {
  return (
    <Card elevation={0}>
      <CardContentThick>
        <Box display="flex" justifyContent="center" mb={2}>
          <AvatarImage
            alt={card.name}
            src={card.avatar.url + `?w=${avatarWidth * 2}`}
            srcSet={`${card.avatar.url}?w=${avatarWidth},
              ${card.avatar.url}?w=${avatarWidth * 1.5} 1.5x,
              ${card.avatar.url}?w=${avatarWidth * 2} 2x`}
          />
        </Box>
        <Box textAlign="center">
          <Typography variant="h4">{card.name}</Typography>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box color={colors.BLUE_GREEN} textAlign="center" mb={2}>
          <Typography400
            variant="h6"
            component="h2"
            gutterBottom
            color="textSecondary"
          >
            {card.role}
          </Typography400>
        </Box>
        <Box display="flex" justifyContent="center">
          <IconButtonSmall
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/open?id=1XIyHRUGSbtSWwNm405jo3uuj8x3kecgt"
            title="Curriculum vitae"
          >
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
      </CardContentThick>
    </Card>
  );
};

const CardContentThick = styled(CardContent)`
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
`;

const AvatarImage = styled(Avatar)`
  width: ${avatarWidth}px;
  height: ${avatarWidth}px;
`;

const Typography400 = styled(Typography)`
  font-weight: 400;
` as typeof Typography;

const IconButtonSmall = styled(IconButton)`
  width: 40px;
  height: 40px;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(1)}px;
  }
` as ExtendButtonBase<IconButtonTypeMap<IconButtonProps>>;
