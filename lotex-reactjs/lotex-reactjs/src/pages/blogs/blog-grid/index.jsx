import Blogs1 from "@/components/blogs/Blogs1";
import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Blog Grid || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};

export default function BlogGridPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb pageName="Blog grid" title="Blog grid" />
      <div className="main-content">
        <Blogs1 />
        <Cta />
      </div>
    </>
  );
}
