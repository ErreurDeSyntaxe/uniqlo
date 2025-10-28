const TWELVE_SECONDS = 1000 * 12;
const favicons = [
  '/uniqlo/shirt.svg',
  '/uniqlo/dress.svg',
  '/uniqlo/beanie.svg',
  '/uniqlo/belt.svg',
  '/uniqlo/high-heel.svg',
  '/uniqlo/pants.svg',
  '/uniqlo/sneaker.svg',
  '/uniqlo/sock.svg',
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
