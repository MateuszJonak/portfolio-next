import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from '@emotion/styled';
import { useSpring, animated, useChain, useSpringRef } from 'react-spring';
import { ProfileCard } from './ProfileCard';
import { ProfileCV } from './ProfileCV';
import { useProfileCard } from '../graphql/hooks/useProfileCard';
import { useGetCvLazyQuery } from '../graphql/queries/cv.generated';
import useMeasure, { UseMeasureRect } from '../hooks/useMeasure';

const useSpringBackground = (rect: UseMeasureRect) => {
  const [currentRect, setCurrentRect] = useState(rect);
  const [initialized, setInitialized] = useState(false);
  const springBackgroundRef = useSpringRef();
  const springBackground = useSpring({
    width: currentRect.width,
    height: currentRect.height,
    opacity: initialized ? 1 : 0,
    immediate: !initialized,
    ref: springBackgroundRef,
  });

  useEffect(() => {
    setCurrentRect(rect);
  }, [rect]);

  useEffect(() => {
    const { height, width } = currentRect;
    if (height !== 0 && width !== 0 && !initialized) {
      setInitialized(true);
    }
  }, [currentRect, initialized]);

  return { springBackground, springBackgroundRef };
};

export const Profile: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [cardRef, cardRect] = useMeasure<HTMLDivElement>();
  const [cvRef, cvRect] = useMeasure<HTMLDivElement>();

  const card = useProfileCard();
  const [requestCV, { data }] = useGetCvLazyQuery();
  useEffect(() => {
    const id = card?.cv?.sys?.id;
    if (id) {
      requestCV({ variables: { id } });
    }
  }, [card, requestCV]);

  const springCardRef = useSpringRef();
  const springCard = useSpring({
    opacity: expanded ? 0 : 1,
    ref: springCardRef,
    from: {
      opacity: 0,
    },
  });

  const springCVRef = useSpringRef();
  const springCV = useSpring({
    opacity: expanded ? 1 : 0,
    ref: springCVRef,
  });

  const { springBackground, springBackgroundRef } = useSpringBackground(
    expanded ? cvRect : cardRect,
  );

  useChain(
    expanded
      ? [springCardRef, springBackgroundRef, springCVRef]
      : [springCVRef, springBackgroundRef, springCardRef],
    [0, expanded ? 0.2 : 0.3, expanded ? 0.4 : 0.6],
  );

  return (
    <>
      <AnimatedBackground
        style={springBackground}
        elevation={0}
      ></AnimatedBackground>

      <AnimatedWrapper style={springCV} ref={cvRef}>
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

      <AnimatedWrapper style={springCard} ref={cardRef}>
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
