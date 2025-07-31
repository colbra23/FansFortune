import Cta from "@/components/common/Cta";
import ContestsSlider2 from "@/components/dashboard/ContestsSlider2";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Dashboard Scratch Offs || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function DashboardScratchPage() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div className="main-content-dashboard gap80">
        {" "}
        <ContestsSlider2 /> <Cta />
        {/* footer */}
        <Footer1 />
      </div>
    </>
  );
}
