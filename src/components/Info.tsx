import About from "./About";
import CustomerReviews from "./CustomerReviews";
import Gallery from "./Gallery";
import Hotels from "./Hotels";
import Performers from "./Performers";
import Program from "./Program";
import PromoPackages from "./PromoPackages";

export default function Info() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-[56%_44%]">
      <div className="justify-self-center xl:justify-self-end mt-24 xl:mt-[195px] xl:mr-[38px] px-5">
        <section className="max-w-[644px] w-full">
          <About />
          <Gallery />
          <PromoPackages />
          <Performers />
          <Hotels />
          <CustomerReviews />
        </section>
      </div>
      <div className=" xl:justify-self-start xl:w-full">
        <aside className="pt-24 px-5 xl:pt-[195px] xl:pl-[75px] pb-[70px] sticky top-0 flex flex-col items-center xl:block bg-[#FAFAFA]">
          <Program />
        </aside>
      </div>
    </section>
  );
}
