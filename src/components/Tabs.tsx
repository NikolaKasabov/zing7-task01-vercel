import { FaBed, FaPlane, FaCalendar } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import Tab from "./Tab";

export default function Tabs() {
  return (
    <div className="flex gap-[14px] justify-center flex-wrap translate-y-14 relative z-10">
      <Tab icon={<FaBed size={32} />}>8 нощувки</Tab>
      <Tab icon={<FaPlane size={32} />}>Самолет</Tab>
      <Tab icon={<HiMapPin size={32} />}>Австрия</Tab>
      <Tab icon={<FaCalendar size={32} />}>11 - 15 март</Tab>
    </div>
  );
}
