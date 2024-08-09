
import { useQuery } from "@tanstack/react-query";
import { getPharmacy } from "../service/getPharmcyApi"
import { useEffect } from "react";

export default function Pharmacy() {
  // const { data } = useQuery({
  //   queryKey: ["pharmacy"],
  //   queryFn: getPharmacy,
  // });
  // // console.log(data)
  useEffect(function () {
    async function getData() {
      const res = await fetch("https://pharma-check.onrender.com/");
      console.log(res);
      const data = await res.json()
      console.log(data)
    }
    getData()
  },[])
  return <main className=" col-span-3">Pharmacy</main>;
}
