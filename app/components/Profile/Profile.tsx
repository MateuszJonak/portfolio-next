'use client';

import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '../IconButton';
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
      <m.div
        className="bg-neutral-600 text-white rounded overflow-hidden transition-shadow shadow"
        layout
        transition={{ layout: { duration: 0.75, type: 'spring' } }}
      >
        {expanded && (
          <m.div
            className="p-4"
            style={{ position: 'relative' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {profileCV}
            <IconButton
              aria-label="close"
              className="absolute top-2 right-2"
              onClick={() => setExpanded(false)}
            >
              <CloseIcon />
            </IconButton>
          </m.div>
        )}
        {!expanded && (
          <m.div
            className="p-4"
            initial={{ opacity: mounted ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileCard onClickExpand={() => setExpanded(true)} card={card} />
          </m.div>
        )}
      </m.div>
    </LazyMotion>
  );
}
