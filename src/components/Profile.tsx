import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';
import { m, LazyMotion } from 'framer-motion';
import { ProfileCV } from './ProfileCV';
import { useProfileCard } from '../graphql/hooks/useProfileCard';
import { GetCvDocument } from '../graphql/queries/cv.generated';
import { useLazyQuery } from '@apollo/client';
import { ProfileCard } from './ProfileCard';

const loadFeatures = () =>
  import('./framerFeatures').then((res) => res.default);

export const Profile: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  const card = useProfileCard();
  const [requestCV, { data }] = useLazyQuery(GetCvDocument);
  useEffect(() => {
    const id = card?.cv?.sys?.id;
    if (id) {
      requestCV({ variables: { id } });
    }
  }, [card, requestCV]);

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
            <ProfileCV cv={data?.cv} />
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
            <ProfileCard card={card} onClickExpand={() => setExpanded(true)} />
          </MotionCardContent>
        )}
      </MotionCard>
    </LazyMotion>
  );
};

const MotionCard = m(Card);
const MotionCardContent = m(CardContent);
const CloseButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`;
