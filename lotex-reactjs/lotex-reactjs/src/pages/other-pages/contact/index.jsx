import Breadcumb from "@/components/common/Breadcumb2";
import Cta from "@/components/common/Cta";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Contact || Lotex - Online Lotto & Lottery Reactjs Template",
  description: "Lotex - Online Lotto & Lottery Reactjs Template",
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb pageName="Contact" title="Contact us" />
      <div className="main-content">
        <Map />
        <ContactInfo />
        <ContactForm />
        <Cta />
      </div>
    </>
  );
}
