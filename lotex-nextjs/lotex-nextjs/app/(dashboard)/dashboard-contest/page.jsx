import Cta from "@/components/common/Cta";
import CurrentContest from "@/components/dashboard/CurrentContest";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
  title:
    "Dashboard Contest || Lotex - Online Lotto & Lottery React Nextjs Template",
  description: "Lotex - Online Lotto & Lottery React Nextjs Template",
};
export default function page() {
  return (
    <>
      {" "}
      <div className="main-content-dashboard gap80">
        {" "}
        <CurrentContest /> <Cta />
        {/* footer */}
        <Footer1 />
      </div>
    </>
  );
}
