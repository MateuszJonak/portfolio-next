import React from 'react';
import Image from 'next/image';
import { Profile } from './components/Profile';
import bgPic from '../public/bg.jpeg';
import { BackgroundWrap } from './components/BackgroundWrap';
import { Box, Container } from './components/MaterialUI';
import ProfileCV from './components/ProfileCV';
import { getCard } from '../api/getCard';

export default async function Home() {
  const card = await getCard();

  return (
    <>
      <BackgroundWrap>
        <Image
          alt="black hole"
          src={bgPic}
          sizes="100vw"
          fill
          style={{ objectFit: 'cover' }}
          quality={80}
          placeholder="blur"
        />
      </BackgroundWrap>
      <Container sx={{ height: '100%' }}>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          {/* @ts-expect-error Server Component */}
          <Profile profileCV={<ProfileCV />} card={card} />
        </Box>
      </Container>
    </>
  );
}
