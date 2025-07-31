import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";

import Results from "@/components/otherPages/Results";
import Winners from "@/components/otherPages/Winners";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Lottery Results || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function LotteryResultsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb title="Lottery results" pageName="Lottery results" />
      <div className="main-content page-lottery-result">
        <Winners />
        <Results />
        <Cta />
      </div>
    </>
  );
}
