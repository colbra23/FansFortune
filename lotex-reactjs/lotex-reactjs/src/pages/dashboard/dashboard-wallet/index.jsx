import Cta from "@/components/common/Cta";
import Wallet from "@/components/dashboard/Wallet";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Dashboard Wallet || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function DashboardWalletPage() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div className="main-content-dashboard">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-heading">
                <h2 className="fw-9 wow fadeInUp" data-wow-delay="0s">
                  Wallet
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Wallet /> <Cta />
        {/* footer */}
        <Footer1 />
      </div>
    </>
  );
}
