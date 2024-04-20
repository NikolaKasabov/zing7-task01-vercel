"use client";
import { useEffect, useState } from "react";

const msInAMinute = 60000;
const msInAnHour = 3600000;
const msInADay = 86400000;

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState(1004100000); // 11 days, 14 hours and 55 minutes
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    function calcDays() {
      return Math.floor(timeLeft / msInADay);
    }

    function calcHours() {
      return Math.floor((timeLeft % (24 * msInAnHour)) / msInAnHour);
    }

    function calcMinutes() {
      return Math.floor((timeLeft - calcDays() * msInADay - calcHours() * msInAnHour) / msInAMinute);
    }

    setDays(calcDays());
    setHours(calcHours());
    setMinutes(calcMinutes());

    const interval = setInterval(() => {
      setDays(calcDays());
      setHours(calcHours());
      setMinutes(calcMinutes());
      setTimeLeft((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div className="mt-16 flex justify-center items-center gap-7 md:gap-[80px]">
      <div className="flex flex-col items-center">
        <p className="text-[58px] leading-tight">{days}</p>
        <p className="text-[14px]">дни</p>
      </div>
      <div className="w-[4px] h-[60px] bg-white"></div>
      <div className="flex flex-col items-center">
        <p className="text-[58px] leading-tight">{hours}</p>
        <p className="text-[14px]">часове</p>
      </div>
      <div className="w-[4px] h-[60px] bg-white"></div>
      <div className="flex flex-col items-center">
        <p className="text-[58px] leading-tight">{minutes}</p>
        <p className="text-[14px]">минути</p>
      </div>
    </div>
  );
}
