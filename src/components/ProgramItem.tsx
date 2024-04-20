import { GoCalendar } from "react-icons/go";

export default function ProgramItem({ hasLeftBorder, title1, title2, children }: any) {
  return (
    <article className="max-w-[412px] mt-9">
      <div className="flex gap-3">
        <GoCalendar className="text-[#D92027]" size={34} />
        <div>
          <p className="text-[#AFAFAF] text-[15px] font-bold">{title1}</p>
          <p className="text-lg text-black font-bold">{title2}</p>
        </div>
      </div>
      <div className={`ml-4 pt-5 pl-[30px] pb-3 text-black text-sm leading-[25px] ${hasLeftBorder ? "border-l-[1px]" : ""} border-[#DFDFDF]`}>{children}</div>
    </article>
  );
}
