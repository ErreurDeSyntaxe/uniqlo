export default async function fetchData() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
  } catch {
    throw new Error('Failed to fetch data');
  }
}
