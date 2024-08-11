export async function getPharmacy() {
  const res = await fetch("https://run.mocky.io/v3/94fa1da3-6a71-45d7-8acc-ff90947c11bf");
  const data = await res.json();
  return data;
 
}
//  https://run.mocky.io/v3/94fa1da3-6a71-45d7-8acc-ff90947c11bf