import { NavLink } from "react-router-dom";
export default function PharmacyItem({ item }) {
  const { id, name, description } = item;
  return (
    <li className=" border-b border-neutral-400/10  py-2 even:bg-grayDark/5 px-3">
      <div className="grid grid-cols-10 items-center py-2">
        <div className="col-span-1">{id}.</div>

        <div className="col-span-3">
          <NavLink to={`/pharmacy/${id}`}>
            <p>{name}</p>
          </NavLink>
        </div>

        <div className="col-span-5">{description}</div>
      </div>
    </li>
  );
}
