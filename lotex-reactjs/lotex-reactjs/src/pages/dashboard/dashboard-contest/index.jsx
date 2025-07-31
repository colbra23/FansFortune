import Cta from "@/components/common/Cta";
import CurrentContest from "@/components/dashboard/CurrentContest";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Dashboard Contest || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function DashboardContestPage() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div className="main-content-dashboard gap80">
        {" "}
        <CurrentContest /> <Cta />
        {/* footer */}
        <Footer1 />
      </div>
    </>
  );
}
