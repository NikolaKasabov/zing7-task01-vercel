import Image from "next/image";

export default function CustomerReviewItem({ icon, image, name, title, children }: any) {
  return (
    <div>
      <div className="max-w-[305px] min-h-[205px] p-5 rounded-2xl bg-[#F5F5F5] relative">
        <p className="text-sm leading-[25px]">{children}</p>
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#F5F5F5] border-r-[10px] border-r-transparent absolute top-full"></div>
      </div>
      <div className="mt-6 ml-[6px] flex gap-[22px]">
        {icon && icon}
        {image && <Image src={image} alt="person" />}
        <div>
          <p className="text-[17px] font-extrabold">{name}</p>
          <p className="text-[13px]">{title}</p>
        </div>
      </div>
    </div>
  );
}
