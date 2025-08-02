import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Home 01 || Lotex - Online Lotto & Lottery React Nextjs Template",
  description: "Lotex - Online Lotto & Lottery React Nextjs Template",
};

export default function Home() {
  return (
    <>
      <Header1 />
      <div className="main-content">
        <div style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>Welcome to Lotex</h1>
          <p>Your lottery platform is loading...</p>
        </div>
      </div>
      <Footer1 />
    </>
  );
}