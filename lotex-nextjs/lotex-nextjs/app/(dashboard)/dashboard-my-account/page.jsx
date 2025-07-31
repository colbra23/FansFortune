import Cta from "@/components/common/Cta";
import Account from "@/components/dashboard/my-account/Account";
import Contests from "@/components/dashboard/my-account/Contests";
import EditProfile from "@/components/dashboard/my-account/EditProfile";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
  title:
    "Dashboard My Account || Lotex - Online Lotto & Lottery React Nextjs Template",
  description: "Lotex - Online Lotto & Lottery React Nextjs Template",
};
export default function page() {
  return (
    <>
      {" "}
      <div className="main-content-dashboard gap62">
        {" "}
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-heading">
                <h2 className="fw-9 wow fadeInUp" data-wow-delay="0s">
                  My account
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Account />
        <Contests />
        <EditProfile /> <Cta />
        {/* footer */}
        <Footer1 />
      </div>
    </>
  );
}
