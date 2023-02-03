'use client';

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';
import { m, LazyMotion } from 'framer-motion';
import ProfileCard from '../ProfileCard';
import { FragmentType } from '../../../gql/fragment-masking';
import { CardFragmentDoc } from '../../../gql/graphql';

const loadFeatures = () =>
  import('./framerFeatures').then((res) => res.default);

export function Profile({
  profileCV,
  card,
}: {
  profileCV: React.ReactElement;
  card: FragmentType<typeof CardFragmentDoc> | null;
}) {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionCard
        layout
        transition={{ layout: { duration: 0.75, type: 'spring' } }}
      >
        {expanded && (
          <MotionCardContent
            style={{ position: 'relative' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {profileCV}
            <CloseButton
              aria-label="close"
              size="small"
              onClick={() => setExpanded(false)}
            >
              <CloseIcon />
            </CloseButton>
          </MotionCardContent>
        )}
        {!expanded && (
          <MotionCardContent
            initial={{ opacity: mounted ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileCard onClickExpand={() => setExpanded(true)} card={card} />
          </MotionCardContent>
        )}
      </MotionCard>
    </LazyMotion>
  );
}

const MotionCard = m(Card);
const MotionCardContent = m(CardContent);
const CloseButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`;
