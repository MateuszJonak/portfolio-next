'use client';
import Image from 'next/image';
import { getFragmentData } from '../../../gql/fragment-masking';
import { AssetFragmentDoc, CvFragment } from '../../../gql/graphql';

export function ProfileCVImage({ cv }: { cv: CvFragment }) {
  const photoAsset = getFragmentData(AssetFragmentDoc, cv?.photo);

  if (!photoAsset?.url) {
    return null;
  }

  return (
    <Image
      alt={cv.name || 'Unknown name'}
      loader={({ src, width, quality }) =>
        `${src}?w=${width}&q=${quality || 75}&fm=webp`
      }
      src={photoAsset?.url}
      fill
      sizes="(max-width: 428px) 50vw, 33vw"
      style={{ objectFit: 'cover' }}
      priority
    />
  );
}
