import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-1/Banner";
import Contests from "@/components/homes/home-1/Contests";
import Hero from "@/components/homes/home-1/Hero";
import Steps from "@/components/homes/home-1/Steps";
import React from "react";

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
      </div>
      <Footer1 />
    </>
  );
}