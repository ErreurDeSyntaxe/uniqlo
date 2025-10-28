const TWELVE_SECONDS = 1000 * 12;
const favicons = [
  '/shirt.svg',
  '/dress.svg',
  '/beanie.svg',
  '/belt.svg',
  '/high-heel.svg',
  '/pants.svg',
  '/sneaker.svg',
  '/sock.svg',
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
