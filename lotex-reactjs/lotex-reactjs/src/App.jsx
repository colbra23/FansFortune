import LayoutWrapper from "@/components/common/LayoutWrapper";
import "../public/scss/main.scss";
import Login from "@/components/modals/Login";
import BacktoTop from "@/components/common/BacktoTop";
import HomePage from "./pages";
import ScrollTopBehaviour from "./components/common/ScrolltoTopBehaviour";
import Homepage2 from "./pages/homes/home-2";
import Homepage3 from "./pages/homes/home-3";
import { Route, Routes } from "react-router-dom";
import ContestPage from "./pages/contest/contest";
import ContestdetailsPage from "./pages/contest/contest-details";
import ContestLayout from "./pages/contest/layout";
import AboutusPage from "./pages/other-pages/about-us";
import LotteryResultsPage from "./pages/other-pages/lottery-results";
import AffiliatePage from "./pages/other-pages/affiliate";
import HowToWorkPage from "./pages/other-pages/how-to-work";
import WinnerListPage from "./pages/other-pages/winner-list";
import FaqPage from "./pages/other-pages/faq";
import DashboardPage from "./pages/dashboard/dashboard";
import OtherPagesLayout from "./pages/other-pages/layout";
import DashboardLayout from "./pages/dashboard/layout";
import DashboardContestPage from "./pages/dashboard/dashboard-contest";
import DashboardScratchPage from "./pages/dashboard/dashboard-scratch-offs";
import DashboardWalletPage from "./pages/dashboard/dashboard-wallet";
import DashboardAffiliatePage from "./pages/dashboard/dashboard-affiliate";
import DashboardMyFavoritePage from "./pages/dashboard/dashboard-my-favorite";
import DashboardSupportPage from "./pages/dashboard/dashboard-support";
import DashboardMyAccountPage from "./pages/dashboard/dashboard-my-account";
import BlogLayout from "./pages/blogs/layout";
import BlogGridPage from "./pages/blogs/blog-grid";
import BlogListPage from "./pages/blogs/blog-list";
import BlogDetailsPage1 from "./pages/blogs/blog-single";
import ContactPage from "./pages/other-pages/contact";
import Register from "./components/modals/Register";

function App() {
  return (
    <>
      <div id="wrapper">
        <LayoutWrapper>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="home-2" element={<Homepage2 />} />
              <Route path="home-3" element={<Homepage3 />} />

              <Route
                path="contest"
                element={
                  <ContestLayout>
                    <ContestPage />{" "}
                  </ContestLayout>
                }
              />
              <Route
                path="contest-details/:id"
                element={
                  <ContestLayout>
                    <ContestdetailsPage />{" "}
                  </ContestLayout>
                }
              />

              <Route
                path="about-us"
                element={
                  <OtherPagesLayout>
                    <AboutusPage />
                  </OtherPagesLayout>
                }
              />
              <Route
                path="lottery-results"
                element={
                  <OtherPagesLayout>
                    <LotteryResultsPage />
                  </OtherPagesLayout>
                }
              />
              <Route
                path="affiliate"
                element={
                  <OtherPagesLayout>
                    <AffiliatePage />
                  </OtherPagesLayout>
                }
              />
              <Route
                path="how-to-work"
                element={
                  <OtherPagesLayout>
                    <HowToWorkPage />
                  </OtherPagesLayout>
                }
              />
              <Route
                path="winner-list"
                element={
                  <OtherPagesLayout>
                    <WinnerListPage />
                  </OtherPagesLayout>
                }
              />
              <Route
                path="faq"
                element={
                  <OtherPagesLayout>
                    <FaqPage />
                  </OtherPagesLayout>
                }
              />
              <Route
                path="contact"
                element={
                  <OtherPagesLayout>
                    <ContactPage />
                  </OtherPagesLayout>
                }
              />
              <Route
                path="dashboard"
                element={
                  <DashboardLayout>
                    <DashboardPage />
                  </DashboardLayout>
                }
              />
              <Route
                path="dashboard-contest"
                element={
                  <DashboardLayout>
                    <DashboardContestPage />
                  </DashboardLayout>
                }
              />

              <Route
                path="dashboard-scratch-offs"
                element={
                  <DashboardLayout>
                    <DashboardScratchPage />
                  </DashboardLayout>
                }
              />
              <Route
                path="dashboard-wallet"
                element={
                  <DashboardLayout>
                    <DashboardWalletPage />
                  </DashboardLayout>
                }
              />
              <Route
                path="dashboard-affiliate"
                element={
                  <DashboardLayout>
                    <DashboardAffiliatePage />
                  </DashboardLayout>
                }
              />
              <Route
                path="dashboard-my-favorite"
                element={
                  <DashboardLayout>
                    <DashboardMyFavoritePage />
                  </DashboardLayout>
                }
              />
              <Route
                path="dashboard-support"
                element={
                  <DashboardLayout>
                    <DashboardSupportPage />
                  </DashboardLayout>
                }
              />
              <Route
                path="dashboard-my-account"
                element={
                  <DashboardLayout>
                    <DashboardMyAccountPage />
                  </DashboardLayout>
                }
              />

              <Route
                path="blog-grid"
                element={
                  <BlogLayout>
                    <BlogGridPage />
                  </BlogLayout>
                }
              />
              <Route
                path="blog-list"
                element={
                  <BlogLayout>
                    <BlogListPage />
                  </BlogLayout>
                }
              />
              <Route
                path="blog-single/:id"
                element={
                  <BlogLayout>
                    <BlogDetailsPage1 />
                  </BlogLayout>
                }
              />
            </Route>
          </Routes>
          <BacktoTop />
        </LayoutWrapper>
      </div>
      <Register />
      <Login />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
