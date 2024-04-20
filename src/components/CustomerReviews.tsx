import { IoPersonCircle } from "react-icons/io5";
import person from "../../public/images/person1.png";
import CustomerReviewItem from "./CustomerReviewItem";

export default function CustomerReviews() {
  const customersInfo = [
    {
      id: 1,
      icon: <IoPersonCircle className="text-[#D92027]" size={58} />,
      image: null,
      name: "John Johnson",
      title: "Co-founder of Forpeople",
      text: "A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone.",
    },
    {
      id: 2,
      icon: null,
      image: person,
      name: "Cha Ji-Hun",
      title: "Co-founder of Forpeople",
      text: "A visual guide could be a wireframe, creative composition, or information architecture.",
    },
    {
      id: 3,
      icon: <IoPersonCircle className="text-[#D92027]" size={58} />,
      image: null,
      name: "Cha Ji-Hun",
      title: "Co-founder of Forpeople",
      text: "A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone.",
    },
    {
      id: 4,
      icon: null,
      image: person,
      name: "Cha Ji-Hun",
      title: "Co-founder of Forpeople",
      text: "A visual guide could be a wireframe, creative composition, or information architecture.",
    },
  ];

  return (
    <section className="pb-[90px]">
      <h2 className="mt-12 text-[27px] font-bold text-center xl:text-left">Отзиви от клиенти</h2>
      <div className="mt-4 flex flex-wrap gap-x-[18px] gap-y-14 justify-center">
        {customersInfo.map((customer) => {
          return (
            <CustomerReviewItem
              key={customer.id}
              icon={customer.icon}
              image={customer.image}
              name={customer.name}
              title={customer.title}
            >
              {customer.text}
            </CustomerReviewItem>
          );
        })}
      </div>
    </section>
  );
}
