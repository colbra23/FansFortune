import LayoutWrapper from "@/components/common/LayoutWrapper";
import "../public/scss/main.scss";
import Login from "@/components/modals/Login";
import BacktoTop from "@/components/common/BacktoTop";
import Register from "@/components/modals/Register";
export const metadata = {
  title: "Home || Lotex - Online Lotto & Lottery React Nextjs Template",
  description: "Lotex - Online Lotto & Lottery React Nextjs Template",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body popup-loader counter-scroll">
        <div id="wrapper">
          <LayoutWrapper>
            {children}

            <BacktoTop />
            <Register />
          </LayoutWrapper>
        </div>
        <Login />
      </body>
    </html>
  );
}
