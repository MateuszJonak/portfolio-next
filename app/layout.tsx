import React from 'react';
import { Providers } from './providers';
import { GRAY } from '../src/theme/colors';
import { getCard } from '../api/getCard';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={GRAY} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

const getPageTitle = async () => {
  const card = await getCard();
  return card?.name && card?.role && `${card.name} - ${card.role}`;
};

export async function generateMetadata() {
  const pageTitle = await getPageTitle();

  return {
    title: pageTitle,
    description: 'Curriculum vitae',
    themeColor: GRAY,
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
  };
}
