import React from 'react';
import Image from 'next/image';
import { Profile } from './components/Profile';
import bgPic from '../public/bg.jpeg';
import ProfileCV from './components/ProfileCV';
import { getCard } from '../api/getCard';

export default async function Home() {
  const card = await getCard();

  return (
    <>
      <div className="fixed h-screen w-screen overflow-hidden -z-10">
        <Image
          alt="black hole"
          src={bgPic}
          sizes="100vw"
          fill
          className="object-cover"
          quality={80}
          placeholder="blur"
        />
      </div>
      <div className="w-full h-full px-4 block mx-auto box-border sm:px-6 lg:max-w-7xl">
        <div className="h-full flex items-center justify-center relative">
          {/* @ts-expect-error Server Component */}
          <Profile profileCV={<ProfileCV />} card={card} />
        </div>
      </div>
    </>
  );
}
