import Blogs2 from "@/components/blogs/Blogs2";
import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Blog List || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function BlogListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb pageName="Blog list" title="Blog list" />
      <div className="main-content">
        <Blogs2 />
        <Cta />
      </div>
    </>
  );
}
