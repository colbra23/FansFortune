import BlogSingle from "@/components/blogs/BlogSingle";
import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import { allBlogs } from "@/data/blogs";

import React from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Blog Single || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function BlogDetailsPage1() {
  let params = useParams();
  const id = params.id;

  const blog = allBlogs.filter((p) => p.id == id)[0] || allBlogs[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb pageName="Blog detail" title="Blog detail" />
      <div className="main-content page-blog-single">
        <BlogSingle blog={blog} />
        <Cta />
      </div>
    </>
  );
}
