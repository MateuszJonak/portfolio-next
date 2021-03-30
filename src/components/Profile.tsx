import React, { useState } from 'react';
import { CardFragment } from '../graphql/queries/card.generated';
import { ProfileCard } from './ProfileCard';
import { ProfileCV } from './ProfileCV';

type Props = { card: CardFragment };

export const Profile: React.FC<Props> = ({ card }) => {
  const [expanded, setExpanded] = useState(false);
  if (expanded) {
    return <ProfileCV close={() => setExpanded(false)} />;
  }
  return <ProfileCard card={card} onClickExpand={() => setExpanded(true)} />;
};
