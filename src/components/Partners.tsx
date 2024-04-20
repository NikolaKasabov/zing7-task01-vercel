import partner1 from "../../public/images/partner1.png";
import partner2 from "../../public/images/partner2.png";
import partner3 from "../../public/images/partner3.png";
import partner4 from "../../public/images/partner4.png";
import partner5 from "../../public/images/partner5.png";
import partner6 from "../../public/images/partner6.png";
import partner7 from "../../public/images/partner7.png";
import partner8 from "../../public/images/partner8.png";
import partner9 from "../../public/images/partner9.png";
import partner10 from "../../public/images/partner10.png";
import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      id: 1,
      logo: partner1,
    },
    {
      id: 2,
      logo: partner2,
    },
    {
      id: 3,
      logo: partner3,
    },
    {
      id: 4,
      logo: partner4,
    },
    {
      id: 5,
      logo: partner5,
    },
    {
      id: 6,
      logo: partner6,
    },
    {
      id: 7,
      logo: partner7,
    },
    {
      id: 8,
      logo: partner8,
    },
    {
      id: 9,
      logo: partner9,
    },
    {
      id: 10,
      logo: partner10,
    },
  ];

  return (
    <section className="py-12 xl:pt-[80px] xl:pb-[110px] bg-[#FAFAFA]">
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="text-[27px] font-bold text-center xl:text-left">Партньори</h2>
        <p className="max-w-[458px] mt-2 mx-auto xl:mx-0 text-center xl:text-left text-sm">
          Our customers accomplish amazing things every day. They work to find cures to cancer, travel to space.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[70px] gap-y-10">
          {partners.map((partner) => (
            <div key={partner.id} className="justify-self-center">
              <Image src={partner.logo} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
