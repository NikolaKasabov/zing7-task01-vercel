import Image from "next/image";
import image1 from "../../public/images/image1.png";
import image2 from "../../public/images/image2.png";

export default function Gallery() {
  return (
    <>
      <h3 className="mt-12 text-lg font-bold text-center xl:text-left">Галерия</h3>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Image src={image1} alt="resort" width={294} height={158} />
        <Image src={image2} alt="resort" width={158} height={158} />
        <Image src={image2} alt="resort" width={158} height={158} />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        <Image src={image2} alt="resort" width={158} height={158} />
        <Image src={image2} alt="resort" width={158} height={158} />
        <Image src={image1} alt="resort" width={294} height={158} />
      </div>
    </>
  );
}
