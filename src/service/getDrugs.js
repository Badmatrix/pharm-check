export async function getDrugs() {
  const res = await fetch("/api");
  if (!res.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await res.json();
  return data;
}
// https://pharma-check.onrender.com/
//  https://run.mocky.io/v3/94fa1da3-6a71-45d7-8acc-ff90947c11bf
