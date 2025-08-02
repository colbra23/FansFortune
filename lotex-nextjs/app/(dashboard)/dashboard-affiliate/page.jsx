import Cta from "@/components/common/Cta";
import Earnings from "@/components/dashboard/affiliate/Earnings";
import Information from "@/components/dashboard/affiliate/Information";
import Statistics from "@/components/dashboard/affiliate/Statistics";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
  title:
    "Dashboard Affiliate || Lotex - Online Lotto & Lottery React Nextjs Template",
  description: "Lotex - Online Lotto & Lottery React Nextjs Template",
};
export default function page() {
  return (
    <>
      {" "}
      <div className="main-content-dashboard">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-heading">
                <h2 className="fw-9">Affiliate</h2>
              </div>
            </div>
          </div>
        </div>
        <Information />
        <Statistics />
        <Earnings />
        <Cta />
        {/* footer */}
        <Footer1 />
      </div>
    </>
  );
}
