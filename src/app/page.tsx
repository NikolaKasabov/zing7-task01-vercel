import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import MoreOffers from "@/components/MoreOffers";
import Partners from "@/components/Partners";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Info />
        <MoreOffers />
        <Partners />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
