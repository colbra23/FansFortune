import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Faqs from "@/components/common/Faqs";

import Banner from "@/components/otherPages/Banner";
import Process2 from "@/components/otherPages/Process2";
import Steps from "@/components/otherPages/Steps";
import VideoBanner from "@/components/otherPages/VideoBanner";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Process || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function HowToWorkPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb pageName="How to work" title="How to work" />
      <div className="main-content">
        <VideoBanner />
        <Steps />
        <Process2 />
        <Banner />
        <Faqs />
        <Cta />
      </div>
    </>
  );
}
