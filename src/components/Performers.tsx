import Image from "next/image";
import performer1 from "../../public/images/performer1.png";
import performer2 from "../../public/images/performer2.png";
import performer3 from "../../public/images/performer3.png";
import performer4 from "../../public/images/performer4.png";

export default function Performers() {
  const performersInfo = [
    {
      id: 1,
      name: "Fat Joe",
      image: performer1,
    },
    {
      id: 2,
      name: "Eminem",
      image: performer2,
    },
    {
      id: 3,
      name: "50 cent",
      image: performer3,
    },
    {
      id: 4,
      name: "Jay-Z",
      image: performer4,
    },
  ];

  return (
    <>
      <h3 className="mt-12 text-lg font-bold text-center xl:text-left">Изпълнители</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-[15px] text-black">
        {performersInfo.map(performer => {
          return (
            <div key={performer.id}>
              <Image src={performer.image} alt={performer.name} />
              <p className="mt-2 text-sm text-center">{performer.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
