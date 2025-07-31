import Categories from "@/components/contests/Categories";
import Cta from "@/components/common/Cta";

import Steps from "@/components/common/Steps";

import React from "react";
import Breadcumb from "@/components/common/Breadcumb2";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Contest || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function ContestPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb pageName="Contest" title="Contest" />
      <div className="main-content">
        <Categories />
        <Steps />
        <Cta />
      </div>
    </>
  );
}
