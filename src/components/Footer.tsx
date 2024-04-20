"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../public/images/logo.png";
import footer1 from "../../public/images/footer1.png";
import footer2 from "../../public/images/footer2.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(ev: any) {
    ev.preventDefault();
    if (email.trim() === "") return;
    toast.success("Thank you for subscribing.");
    setEmail("");
  }

  return (
    <footer className="bg-[#323232] text-white">
      <div className="max-w-[1320px] mx-auto px-5 pt-11 pb-12 flex justify-between flex-col xl:flex-row">
        <h3 className="max-w-[538px] text-[25px] font-extrabold leading-10 max-xl:mx-auto max-xl:text-center">
          Отстъпки и специални предложения налични само на имейл
        </h3>
        <div className="max-xl:mt-8 xl:w-[600px] max-xl:flex max-xl:flex-col max-xl:items-center">
          <form className="sm:h-10 max-w-[600px] w-full flex max-sm:flex-col" onSubmit={handleSubmit}>
            <input
              className="h-full max-sm:h-10 grow pl-4 placeholder:text-[13px] text-[#323232]"
              type="email"
              name="email"
              placeholder="Въведете вашия имейл"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <button className="h-full max-sm:h-10 max-sm:mt-2 px-4 bg-[#D92027] text-[17px] font-bold">
              Абонирай се
            </button>
          </form>
          <p className="mt-2">Всеки месец ще получаваш първи най-добрите ни оферти</p>
        </div>
      </div>

      <div className="h-[1px] bg-white"></div>

      <div className="max-w-[1292px] mx-auto px-5 pb-[50px] text-[17px] flex flex-wrap gap-x-[90px]             max-sm:justify-center">
        <div className="pt-5">
          <Image src={logo} alt="logo" />
          <div className="mt-10 flex gap-[13px]">
            <Image src={footer1} alt="map of Bulgaria" className="self-start" />
            <p className="max-w-32 text-xs font-extrabold">Лиценз, удостоверение за регистрация № 05236</p>
          </div>
          <div className="mt-8 flex gap-[26px]">
            <Image src={footer2} alt="shield with a planet" className="self-start" />
            <p className="max-w-32 text-xs font-extrabold">Застраховка &quot;Отговорност на туроператора&quot;</p>
          </div>
          <div className="max-w-[120px] mt-12 text-xs text-[#919191] leading-5">
            <p>All rights reserved.</p>
            <p>© 2020 Mistral</p>
          </div>
        </div>

        <div className="pt-[60px]">
          <h3 className="font-extrabold">Контакти</h3>
          <ul className="mt-[23px]">
            <li>
              <p>1111 София, България,</p>
              <p>ул. Христо Белчев 34</p>
            </li>
            <li className="mt-2">
              <p>+359 884 47 30 34 // мобилен</p>
            </li>
            <li className="mt-2">
              <p>+359 2 980 44 59 // офис</p>
            </li>
            <li className="mt-2">
              <p>+359 2 980 41 05 // факс</p>
            </li>
            <li className="mt-2">
              <p>mistral@mistralbg.com</p>
            </li>
            <li className="mt-2">
              <p>Понеделник - Петък</p>
              <p>10.00ч. - 18.00ч.</p>
            </li>
          </ul>
        </div>

        <div className="pt-[60px]">
          <h3 className="font-extrabold">Бързи връзки</h3>
          <nav className="mt-[23px]">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-[14px]">
              <li>
                <Link href="/" className="border-b-[1px] border-transparent hover:border-white">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/" className="border-b-[1px] border-transparent hover:border-white">
                  Общи условия
                </Link>
              </li>
              <li>
                <Link href="/" className="border-b-[1px] border-transparent hover:border-white">
                  Документи
                </Link>
              </li>
              <li>
                <Link href="/" className="border-b-[1px] border-transparent hover:border-white">
                  Лични данни
                </Link>
              </li>
              <li>
                <Link href="/" className="border-b-[1px] border-transparent hover:border-white">
                  Начин на плащане
                </Link>
              </li>
              <li>
                <Link href="/" className="border-b-[1px] border-transparent hover:border-white">
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="pt-[60px] flex flex-col items-center gap-4">
          <p>120к ни харесват в</p>
          <FaFacebook size={50} />
          <p>60к ни харесват в</p>
          <FaInstagram size={45} />
        </div>
      </div>
    </footer>
  );
}
