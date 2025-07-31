import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";

import AffiliatePartners from "@/components/otherPages/AffiliatePartners";
import Brands from "@/components/otherPages/Brands";
import Members from "@/components/otherPages/Members";
import Process from "@/components/otherPages/Process";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Affiliate || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function AffiliatePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb title="Become an affiliate" pageName="Winner" />
      <div className="main-content">
        <Process />
        <Brands />
        <AffiliatePartners />
        <Members />
        <Cta />
      </div>
    </>
  );
}
