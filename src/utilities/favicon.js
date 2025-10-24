import { useEffect, useState } from 'react';

const TWELVE_SECONDS = 1000 * 12;
const favicons = [
  './public/shirt.svg',
  './public/dress.svg',
  './public/beanie.svg',
  './public/belt.svg',
  './public/high-heel.svg',
  './public/pants.svg',
  './public/sneaker.svg',
  './public/sock.svg',
];

export default function useFavicon() {
  const [favicon, setFavicon] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (favicon < favicons.length - 1) setFavicon((f) => f + 1);
      else setFavicon(0);
    }, TWELVE_SECONDS);

    return () => clearInterval(id);
  }, [favicon]);

  const faviconEl = document.querySelector("link[rel~='icon']");
  faviconEl.href = favicons[favicon];
}
