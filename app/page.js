@@ .. @@
 import Footer1 from "@/components/footers/Footer1";
 import Header1 from "@/components/headers/Header1";
-import Banner from "@/components/homes/home-1/Banner";
-import Banner2 from "@/components/homes/home-1/Banner2";
-import Banner3 from "@/components/homes/home-1/Banner3";
-import Contests from "@/components/homes/home-1/Contests";
-import CustomerSupport from "@/components/common/CustomerSupport";
-import Facts from "@/components/common/Facts";
-import Faqs from "@/components/common/Faqs";
-import Hero from "@/components/homes/home-1/Hero";
-import Steps from "@/components/homes/home-1/Steps";
-import Testimonials from "@/components/homes/home-1/Testimonials";
-import TopWinners from "@/components/homes/home-1/TopWinners";
-import Winners from "@/components/common/Winners";
+import React from "react";
 
 export const metadata = {
   title: "Home 01 || Lotex - Online Lotto & Lottery React Nextjs Template",
@@ -15,19 +7,12 @@
 export default function Home() {
   return (
     <>
       <Header1 />
-      <Hero />
       <div className="main-content">
-        <Banner />
-        <Steps />
-        <Contests />
-        <Winners />
-        <Banner2 />
-        <TopWinners />
-        <Facts />
-        <Testimonials />
-        <Banner3 />
-        <Faqs />
-        <CustomerSupport />
+        <div style={{ padding: '100px 0', textAlign: 'center' }}>
+          <h1>Welcome to Lotex</h1>
+          <p>Your lottery platform is loading...</p>
+        </div>
       </div>
       <Footer1 />
     </>
   );
 }