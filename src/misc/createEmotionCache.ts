import createCache from '@emotion/cache';

const key = 'cv';
export default function createEmotionCache() {
  return createCache({ key });
}
