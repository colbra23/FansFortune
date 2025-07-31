import Cta from "@/components/common/Cta";
import Support from "@/components/dashboard/Support";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Dashboard Support || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function DashboardSupportPage() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div className="main-content-dashboard">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-heading">
                <h2 className="fw-9 wow fadeInUp">Support</h2>
              </div>
            </div>
          </div>
        </div>
        <Support /> <Cta />
        {/* footer */}
        <Footer1 />
      </div>
    </>
  );
}
