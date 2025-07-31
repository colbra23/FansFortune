import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-1/Banner";
import Banner2 from "@/components/homes/home-1/Banner2";
import Banner3 from "@/components/homes/home-1/Banner3";
import Contests from "@/components/homes/home-1/Contests";
import CustomerSupport from "@/components/common/CustomerSupport";
import Facts from "@/components/common/Facts";
import Faqs from "@/components/common/Faqs";
import Hero from "@/components/homes/home-1/Hero";
import Steps from "@/components/homes/home-1/Steps";
import Testimonials from "@/components/homes/home-1/Testimonials";
import TopWinners from "@/components/homes/home-1/TopWinners";
import Winners from "@/components/common/Winners";

export const metadata = {
  title: "Home 01 || Lotex - Online Lotto & Lottery React Nextjs Template",
  description: "Lotex - Online Lotto & Lottery React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <div className="main-content">
        <Banner />
        <Steps />
        <Contests />
        <Winners />
        <Banner2 />
        <TopWinners />
        <Facts />
        <Testimonials />
        <Banner3 />
        <Faqs />
        <CustomerSupport />
      </div>
      <Footer1 />
    </>
  );
}
