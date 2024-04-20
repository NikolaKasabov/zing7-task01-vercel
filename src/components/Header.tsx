'use client';
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../public/images/logo.png';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function handleClick() {
    setShowMobileNav(prev => !prev);
  }

  return (
    <header className="max-w-[1320px] mx-auto px-5 flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <div className="flex gap-[21px] min-h-[84px] items-center">
        <button className="self-center" onClick={handleClick}>
          <RxHamburgerMenu size={30} />
        </button>
        <Link href="/" className="self-start shrink-0">
          <Image src={logo} alt="logo" width={120} height={62} />
        </Link>
      </div>

      <nav className="hidden lg:!block py-8 lg:py-0" style={{ display: showMobileNav ? "block" : "none" }}>
        <ul className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[45px] font-bold">
          <li className="border-b-[1px] border-transparent hover:border-[#323232]">
            <Link href="/">Почивки и екскурзии</Link>
          </li>
          <li className="border-b-[1px] border-transparent hover:border-[#323232]">
            <Link href="/">Хотели</Link>
          </li>
          <li className="border-b-[1px] border-transparent hover:border-[#323232]">
            <Link href="/">Блог</Link>
          </li>
          <li className="border-b-[1px] border-transparent hover:border-[#323232]">
            <Link href="/">За нас</Link>
          </li>
          <li className="border-b-[1px] border-transparent hover:border-[#323232]">
            <Link href="/">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
