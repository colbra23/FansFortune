import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Winners from "@/components/common/Winners";

import WinningNumber from "@/components/otherPages/WinningNumber";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Winner List || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function WinnerListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb title="Winner list" pageName="Winner" />
      <div className="main-content">
        <WinningNumber />
        <Winners parentClass="s-lastest-winner page-winner-list tf-spacing-1" />
        <Cta />
      </div>
    </>
  );
}
