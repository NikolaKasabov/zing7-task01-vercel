import Image from "next/image";

export default function Offer({image, alt, children}) {
  return (
    <div className="max-w-[300px] bg-white shadow-md hover:shadow-xl hover:cursor-pointer">
      <Image src={image} alt={alt} />
      <div>{children}</div>
    </div>
  );
}