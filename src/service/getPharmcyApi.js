export async function getPharmacy() {
  
    const res = await fetch("https://pharma-check.onrender.com/");
    console.log(res)
    // const data = await res.json();
    // return data;
 
}
