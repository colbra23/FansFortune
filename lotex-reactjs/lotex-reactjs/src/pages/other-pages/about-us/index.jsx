import Breadcumb from "@/components/common/Breadcumb";
import Facts from "@/components/common/Facts";
import Steps from "@/components/common/Steps";
import Cta from "@/components/common/Cta";

import About from "@/components/otherPages/About";
import Features from "@/components/otherPages/Features";
import History from "@/components/otherPages/History";
import Mission from "@/components/otherPages/Mission";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "About Us || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function AboutusPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb title="About the Lode lottery" pageName="About us" />
      <div className="main-content">
        <About />
        <Steps parentClass="s-how-it-work" />
        <Facts parentClass="s-succes-story tf-spacing-2" />
        <Features />
        <Mission />
        <History />
        <Cta />
      </div>
    </>
  );
}
