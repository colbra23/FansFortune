import Breadcumb from "@/components/common/Breadcumb2";
import ContestDetails from "@/components/contests/ContestDetails";
import Cta from "@/components/common/Cta";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
import { allContests } from "@/data/contests";
const metadata = {
  title: "Contest Details || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function ContestdetailsPage() {
  let params = useParams();
  const id = params.id;

  const contest = allContests.filter((p) => p.id == id)[0] || allContests[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb title="Buy lottery tickets online" pageName="Contest" />
      <div className="main-content page-contest-details">
        <ContestDetails contest={contest} />
        <Cta />
      </div>
    </>
  );
}
