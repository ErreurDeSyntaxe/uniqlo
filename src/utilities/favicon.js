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

export default function changeFavicon() {
  let favicon = 0;

  setInterval(() => {
    if (favicon < favicons.length - 1) favicon++;
    else favicon = 0;

    const faviconEl = document.querySelector("link[rel~='icon']");
    faviconEl.href = favicons[favicon];
  }, TWELVE_SECONDS);
}
