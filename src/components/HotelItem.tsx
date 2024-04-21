"use client";
import { FaHotel } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../public/images/slider1.png";
import slider2 from "../../public/images/slider2.png";
import slider3 from "../../public/images/slider3.png";
import { useEffect, useRef } from "react";

export default function HotelItem() {
  function LeftArrow({ className, style, onClick }: any) {
    return (
      <button onClick={onClick}>
        <FaChevronLeft className={className} style={{ ...style, color: "black" }} />
      </button>
    );
  }

  function RightArrow({ className, style, onClick }: any) {
    return (
      <button onClick={onClick}>
        <FaChevronRight className={className} style={{ ...style, color: "black" }} />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  const wrapper: any = useRef();

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;

      if (wrapper.current) {
        if (windowWidth < 750) {
          wrapper.current.style.width = windowWidth - 60 + "px";
        } else {
          wrapper.current.style.width = "100%";
        }
      }
    }

    const interval = setInterval(() => {
      handleResize();
    }, 100);

    addEventListener("resize", handleResize);
    handleResize();

    return () => {
      removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pb-4 border-b-[#DFDFDF] border-b-[1px]">
      <p className="mt-4 flex items-center gap-[14px]">
        <FaHotel className="text-[#D92027]" size={30} />
        <span className="text-xl font-bold text-black">Grand Halic 4****</span>
      </p>
      <p className="mt-3 text-sm text-black leading-[27px]">
        Grand Hotel Halic предлага удобно местоположение в централния район Beyoglu и изглед към залива Златния рог. На
        пешеходно разстояние се намират площад „Таксим“ и кулата Галата. На място има закрит плувен басейн и СПА център.
      </p>
      <p className="mt-4 text-sm text-black leading-[27px]">
        Хотелът предлага добре обзаведени стаи за гости и суити с кът за сядане и плоскоекранен телевизор със сателитни
        канали. Всяко помещение за настаняване има отопление и климатик, както и безплатен WiFi достъп.
      </p>
      <div ref={wrapper} className="mt-3">
        <Slider {...settings} className="slider-wrapper">
          <div>
            <Image src={slider1} alt="resort" />
          </div>
          <div>
            <Image src={slider2} alt="resort" />
          </div>
          <div>
            <Image src={slider3} alt="resort" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
