import React, { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
import { ProfileCard } from './ProfileCard';
import { ProfileCV } from './ProfileCV';
import { useProfileCard } from '../graphql/hooks/useProfileCard';
import { GetCvDocument } from '../graphql/queries/cv.generated';
import useMeasure, { UseMeasureRect } from '../hooks/useMeasure';
import { useLazyQuery } from '@apollo/client';

const useBoxAnimation = (
  expanded: boolean,
  mainRect: UseMeasureRect,
  detailsRect: UseMeasureRect,
) => {
  const [initialized, setInitialized] = useState(false);
  const springMainRef = useSpringRef();
  const springMain = useSpring({
    opacity: expanded ? 0 : 1,
    ref: springMainRef,
    from: {
      opacity: 0,
    },
  });

  const springDetailsRef = useSpringRef();
  const springDetails = useSpring({
    opacity: expanded ? 1 : 0,
    ref: springDetailsRef,
  });

  const currentRect = useMemo(
    () => (expanded ? detailsRect : mainRect),
    [expanded, detailsRect, mainRect],
  );
  const springBackgroundRef = useSpringRef();
  const springBackground = useSpring({
    width: currentRect.width,
    height: currentRect.height,
    opacity: initialized ? 1 : 0,
    immediate: !initialized,
    ref: springBackgroundRef,
  });

  useEffect(() => {
    const { height, width } = currentRect;
    if (height !== 0 && width !== 0 && !initialized) {
      setInitialized(true);
    }
  }, [currentRect, initialized]);

  const timeSteps = useMemo(() => {
    if (!initialized) {
      return [0, 0.2, 0.3];
    }
    return [0, expanded ? 0.2 : 0.3, expanded ? 0.4 : 0.6];
  }, [expanded, initialized]);

  useChain(
    expanded
      ? [springMainRef, springBackgroundRef, springDetailsRef]
      : [springDetailsRef, springBackgroundRef, springMainRef],
    timeSteps,
  );

  return { springBackground, springMain, springDetails };
};

export const Profile: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [cardRef, cardRect] = useMeasure<HTMLDivElement>();
  const [cvRef, cvRect] = useMeasure<HTMLDivElement>();

  const card = useProfileCard();
  const [requestCV, { data }] = useLazyQuery(GetCvDocument);
  useEffect(() => {
    const id = card?.cv?.sys?.id;
    if (id) {
      requestCV({ variables: { id } });
    }
  }, [card, requestCV]);

  const { springBackground, springDetails, springMain } = useBoxAnimation(
    expanded,
    cardRect,
    cvRect,
  );

  return (
    <>
      <AnimatedBackground
        style={springBackground}
        elevation={0}
      ></AnimatedBackground>

      <AnimatedWrapper style={springDetails} ref={cvRef}>
        <CardContent sx={{ p: 3 }}>
          <ProfileCV cv={data?.cv} />
        </CardContent>
        {expanded && (
          <CloseButton
            aria-label="close"
            size="small"
            onClick={() => setExpanded(false)}
          >
            <CloseIcon />
          </CloseButton>
        )}
      </AnimatedWrapper>

      <AnimatedWrapper style={springMain} ref={cardRef}>
        <CardContent sx={{ p: 3 }}>
          <ProfileCard card={card} onClickExpand={() => setExpanded(true)} />
        </CardContent>
      </AnimatedWrapper>
    </>
  );
};

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const Wrapper = styled(Box)`
  /* https://caniuse.com/mdn-css_properties_position_absolutely_positioned_flex_children */
  position: absolute;
`;
const AnimatedWrapper = animated(Wrapper);

const AnimatedBackground = animated(Card);
