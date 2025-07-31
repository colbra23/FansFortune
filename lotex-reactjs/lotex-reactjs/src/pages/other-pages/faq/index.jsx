import Breadcumb from "@/components/common/Breadcumb";

import Faqs from "@/components/otherPages/Faqs";
import FaqSearch from "@/components/otherPages/FaqSearch";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Faq || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function FaqPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb title="Frequently asked questions" pageName="FAQ" />
      <div className="main-content">
        <FaqSearch />
        <Faqs />
      </div>
    </>
  );
}
