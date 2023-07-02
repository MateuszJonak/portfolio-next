import React from 'react';
import { Divider } from './Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from 'next/image';
import { AssetFragmentDoc, CardFragmentDoc } from '../../gql/graphql';
import { FragmentType, getFragmentData } from '../../gql/fragment-masking';
import { IconLink, IconButton } from './IconButton';

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
        <div className="flex justify-center mb-4">
          <Image
            alt={card.name || 'Unknown name'}
            loader={({ src, width, quality }) =>
              `${src}?w=${width}&q=${quality || 75}&fm=webp`
            }
            src={avatarAsset.url}
            width={avatarWidth}
            height={avatarWidth}
            priority
            className="rounded-full"
          />
        </div>
      )}
      <div className="text-center">
        <h1 className="m-0 font-light text-3xl">{card.name}</h1>
      </div>

      <div className="my-4">
        <Divider />
      </div>
      <div className="text-center mb-4">
        <h2 className="m-0 font-normal text-xl text-white/[0.7] mb-1.5">
          {card.role}
        </h2>
      </div>

      <div className="flex justify-center">
        <IconButton
          onClick={onClickExpand}
          title="Curriculum vitae"
          className="w-10 h-10 mr-2"
        >
          <DescriptionIcon htmlColor="#ffb74d" />
        </IconButton>
        <IconLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MateuszJonak"
          title="Github Profile"
          className="w-10 h-10 mr-2"
        >
          <GitHubIcon htmlColor="#FFFFFF" />
        </IconLink>
        <IconLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mateusz-jonak"
          title="Linkedin Profile"
          className="w-10 h-10 text-sky-300"
        >
          <LinkedInIcon />
        </IconLink>
      </div>
    </>
  );
}
