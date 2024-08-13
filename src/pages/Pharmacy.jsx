import { useDrugs } from "../hooks/useDrugs";
import PharmacyItem from "../components/PharmacyItem";
import Loading from "../components/Loading";

export default function Pharmacy() {
  const { data: pharmacy, isLoading, isError } = useDrugs();
  console.log(pharmacy);
if(isLoading) return <Loading/>
  return (
    <main className=" col-span-3 text-grayDark">
      <ul className=" ">
        <main role="table ">
          <div className="grid grid-cols-10 gap-5 font-bold text-xl capitalize py-2 bg-grayDark/5 px-5">
            <div className="col-span-1"></div>
            <div className="col-span-3">name</div>
            <div className="col-span-5">description</div>
          </div>
          <div className="px-5 ">
            {pharmacy?.map((item) => (
              <PharmacyItem key={item.id} item={item} />
            ))}
          </div>
        </main>
      </ul>
    </main>
  );
}
