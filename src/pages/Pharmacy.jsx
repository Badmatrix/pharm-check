import { useQuery } from "@tanstack/react-query";
import { getPharmacy } from "../service/getPharmcyApi";
import { useEffect } from "react";
import PharmacyItem from "../components/PharmacyItem";

export default function Pharmacy() {
  const { data: pharmacy } = useQuery({
    queryKey: ["pharmacy"],
    queryFn: getPharmacy,
  });
  console.log(pharmacy);

  return (
    <main className=" col-span-3">
      <ul>
        {pharmacy?.map((item) => (
          <PharmacyItem key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}
