import React, { useState } from 'react';
import { ProfileCard } from './ProfileCard';
import { ProfileCV } from './ProfileCV';

export const Profile: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  if (expanded) {
    return <ProfileCV close={() => setExpanded(false)} />;
  }
  return <ProfileCard onClickExpand={() => setExpanded(true)} />;
};
