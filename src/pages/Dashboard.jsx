import Analytics from "../ui/Analytics";
import Appiontment from "../ui/Appiontment";
import Doctor from "../ui/Doctor";

export default function Dashboard() {
  return <div className="px-6 flex flex-col gap-5 py-10 h-[calc(100vh-96px)]  overflow-y-scroll">
   <Doctor/>
   <Appiontment/>
   <Analytics/>
  </div>;
}
