import { useEffect, useState } from 'react';

export default function useFavicon() {
  const [favicon, setFavicon] = useState('./public/shirt.svg');
  const THIRTY_SECONDS = 1000 * 30;

  useEffect(() => {
    const id = setInterval(() => {
      if (favicon === './public/shirt.svg') setFavicon('./public/dress.svg');
      else setFavicon('./public/shirt.svg');
    }, THIRTY_SECONDS);

    return () => clearInterval(id);
  }, [favicon, THIRTY_SECONDS]);

  const faviconEl = document.querySelector("link[rel~='icon']");
  faviconEl.href = favicon;
}
