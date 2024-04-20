import Offer from "./Offer";
import offer1 from "../../public/images/offer1.png";
import offer2 from "../../public/images/offer2.png";
import { TbBed } from "react-icons/tb";
import { CiPlane } from "react-icons/ci";
import { TbLocation } from "react-icons/tb";

export default function MoreOffers() {
  const offersImages = [
    {
      id: 1,
      image: offer1,
      alt: "ressort",
    },
    {
      id: 2,
      image: offer2,
      alt: "ressort",
    },
    {
      id: 3,
      image: offer1,
      alt: "ressort",
    },
    {
      id: 4,
      image: offer2,
      alt: "ressort",
    },
  ];

  const offerInfo = (
    <div className="pt-[14px] px-5 pb-6">
      <h3 className="text-[17px] font-bold leading-[21px]">Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*</h3>
      <div className="mt-3 flex justify-between text-[#999999]">
        <div className="self-end">
          <p className="text-xl font-bold text-[#D92027]">336лв</p>
          <p className="text-[15px] line-through">689лв</p>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <TbBed size={20} />
            <span className="text-xs">8 нощувки</span>
          </p>
          <p className="flex items-center gap-2">
            <CiPlane size={20} />
            <span className="text-xs">Самолет</span>
          </p>
          <p className="flex items-center gap-2">
            <TbLocation size={20} />
            <span className="text-xs">Австрия</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-5 xl:pt-[60px] xl:pb-[100px] bg-[#FAFAFA]">
      <div className="max-w-[1321px] mx-auto px-5">
        <h2 className="text-[27px] font-bold text-center xl:text-left">Още предложения</h2>
        <div className="mt-[26px] flex justify-center flex-wrap gap-[27px]">
          {offersImages.map(image => {
            return <Offer key={image.id} image={image.image} alt={image.alt}>{offerInfo}</Offer>;
          })}
        </div>
      </div>
    </section>
  );
}
