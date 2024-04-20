import Counter from "./Counter";
import Tabs from "./Tabs";

export default function Hero() {
  return (
    <section className="background-hero text-white pt-[105px] relative">
      <h1 className="font-extrabold text-[47px] text-center">Арабска приказка в Йордания</h1>
      <p className="w-max mx-auto mt-4 px-[34px] py-[7px] border-[2px] border-white text-xl">11-15 март</p>
      <Counter />
      <button className="mx-auto mt-10 block px-5 py-4 font-bold bg-[#DD363D] hover:bg-[#b4383e] rounded-full">
        Резервирайте сега
      </button>
      <p className="mt-3 text-center text-sm">от 1149,00лв</p>
      <Tabs />
    </section>
  );
}
