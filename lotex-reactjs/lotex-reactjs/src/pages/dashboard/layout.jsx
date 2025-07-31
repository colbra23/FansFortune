import CountdownTimer from "@/components/common/Countdown";
import Cta from "@/components/common/Cta";
import CollapseMenu from "@/components/dashboard/CollapseMenu";
import DashboardMibilemenuToggler from "@/components/dashboard/DashboardMibilemenuToggler";
import DashboardMobileMenu from "@/components/dashboard/DashboardMobileMenu";
import RightSidebarToggler from "@/components/dashboard/RightSidebarToggler";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import SupportForm from "@/components/dashboard/SupportForm";
import Footer1 from "@/components/footers/Footer1";
import CoinSelect from "@/components/headers/CoinSelect";

import { Link } from "react-router-dom";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="layout-wrap relative">
        {/* button-show-hide */}
        <DashboardMibilemenuToggler />
        {/* /button-show-hide */}
        {/* section-menu-left */}
        <div className="section-menu-left">
          <div className="center">
            <div className="center-item images-wrap">
              <a href="#" className="">
                <img
                  alt=""
                  src="/images/section/menu-left.png"
                  width={241}
                  height={66}
                />
              </a>
            </div>
            <div className="divider" />
            <div className="center-item">
              <SidebarMenu />
            </div>
            <div className="divider" />
            <div className="center-item">
              <div className="community">
                <div className="tite-item">Join Our Community</div>
                <ul className="tf-social style-1 flex-wrap">
                  <li>
                    <a href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-send" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linkedin2" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-tiktok" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-skype" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="divider" />
            <div className="center-item">
              <div className="invite">
                <div className="tite-item">Invite your Friends</div>
                <div className="text">
                  Refer users using your referral link and earn up to 20% of
                  their winnings.
                </div>
                <div className="box-coppy">
                  https://themeforest.net/
                  <i className="icon-coppy" />
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="center-item">
              <div className="faq">
                <div className="tite-item">FAQ</div>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-documentation" />
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-provably-fair" />
                      Provably fair
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-payment-proof" />
                      Payment proof
                    </a>
                  </li>
                  <li>
                    <Link to={`/contact`}>
                      <i className="icon-contact-us" />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-live-support" />
                      Live Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="divider" />
            <div className="center-item">
              <CollapseMenu />
            </div>
          </div>
        </div>
        {/* /section-menu-left */}
        {/* header-dashboard */}
        <div className="header-dashboard">
          <div className="wrap">
            <div className="header-left">
              <div className="header-logo">
                <Link to={`/`}>
                  <img
                    alt=""
                    data-retina="/images/logo/logo@2x.png"
                    src="/images/logo/logo.png"
                    width={170}
                    height={60}
                  />
                </Link>
              </div>
            </div>
            <div className="header-right">
              <div className="header-wallet">
                <a className="tf-btn" href="#">
                  <i className="icon-wallets" />
                  <span>Wallet</span>
                </a>
              </div>
              <div className="header-coins">
                <CoinSelect />
                <span>USD</span>
              </div>
              <div className="header-notification">
                <div className="popup-wrap notification has-noti type-has-children">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="popup-top">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 20 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 16.8476C15.6392 16.8476 18.2481 16.1242 18.5 13.2205C18.5 10.3188 16.6812 10.5054 16.6812 6.94511C16.6812 4.16414 14.0452 1 10 1C5.95477 1 3.31885 4.16414 3.31885 6.94511C3.31885 10.5054 1.5 10.3188 1.5 13.2205C1.75295 16.1352 4.36177 16.8476 10 16.8476Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.3889 19.8574C11.0247 21.3721 8.89672 21.3901 7.51953 19.8574"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <img
                          alt=""
                          src="icon/notifications-empty.svg"
                          width={100}
                          height={100}
                        />
                      </li>
                      <li>
                        <p>No notifications right now</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-account">
                <div className="popup-wrap account">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="popup-top">
                        <span className="image">
                          <img
                            alt=""
                            src="/images/avatar/user-1.png"
                            width={100}
                            height={100}
                          />
                        </span>
                        <span className="name">
                          <span className="text">Themesflat</span>
                          <i className="icon-arrow-down" />
                        </span>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <Link to={`/dashboard-my-account`} className="item">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            className="me-1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.4993 4C10.4993 4.66304 10.2359 5.29893 9.7671 5.76777C9.29826 6.23661 8.66237 6.5 7.99933 6.5C7.33629 6.5 6.70041 6.23661 6.23157 5.76777C5.76273 5.29893 5.49933 4.66304 5.49933 4C5.49933 3.33696 5.76273 2.70107 6.23157 2.23223C6.70041 1.76339 7.33629 1.5 7.99933 1.5C8.66237 1.5 9.29826 1.76339 9.7671 2.23223C10.2359 2.70107 10.4993 3.33696 10.4993 4ZM3 13.412C3.02142 12.1002 3.55756 10.8494 4.49278 9.92936C5.42801 9.00929 6.68739 8.49365 7.99933 8.49365C9.31127 8.49365 10.5707 9.00929 11.5059 9.92936C12.4411 10.8494 12.9772 12.1002 12.9987 13.412C11.4303 14.1312 9.72477 14.5023 7.99933 14.5C6.21533 14.5 4.522 14.1107 3 13.412Z"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          {"My account"}
                        </Link>
                      </li>
                      <li>
                        <Link to={`/dashboard-wallet`} className="item">
                          <i className="icon-wallet me-1" />
                          {"Wallet"}
                        </Link>
                      </li>
                      <li>
                        <Link to={`/`} className="item">
                          <i className="icon-log-out me-1" />
                          {"Log out"}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /header-dashboard */}
        {/* sidebar-dashboard */}
        <div className="sidebar-dashboard">
          {/* wrap-sidebar-dashboard */}
          <div className="wrap-sidebar-dashboard">
            {/* sidebar-contest */}
            <div className="sidebar-contest">
              <div className="heading">
                <div className="icon">
                  <img
                    alt=""
                    src="/images/item/item-1.png"
                    width={48}
                    height={48}
                  />
                </div>
                Contest is going on
              </div>
              <div className="wrap">
                <div className="contest-item main">
                  <div className="image">
                    <img
                      alt=""
                      src="/images/sidebar/contest-1.jpg"
                      width={460}
                      height={302}
                    />
                  </div>
                  <div className="content">
                    <div className="title">
                      <a href="#">90 Bingo</a>
                    </div>
                    <div className="sub">
                      <div className="sub-item">
                        <i className="icon-remaining" />
                        <p>Contest No: Lo43</p>
                      </div>
                      <div className="sub-item">
                        <i className="icon-ticket" />
                        <p>
                          <span className="fw-6">9320</span> Remaining
                        </p>
                      </div>
                    </div>
                    <span className="js-countdown style-1">
                      <CountdownTimer
                        targetDate={new Date(
                          Date.now() + 9 * 60 * 60 * 1000
                        ).getTime()}
                      />
                    </span>
                  </div>
                </div>
                <div className="contest-item">
                  <div className="image">
                    <img
                      alt=""
                      src="/images/sidebar/contest-2.png"
                      width={160}
                      height={100}
                    />
                  </div>
                  <div className="title">
                    <a href="#">Free to play Vegas</a>
                  </div>
                  <div className="sub">
                    <div className="sub-item">
                      <i className="icon-remaining" />
                      <p>Contest No: Lo43</p>
                    </div>
                    <div className="sub-item">
                      <i className="icon-ticket" />
                      <p>
                        <span className="fw-6">9320</span> Remaining
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contest-item">
                  <div className="image">
                    <img
                      alt=""
                      src="/images/sidebar/contest-3.png"
                      width={160}
                      height={100}
                    />
                  </div>
                  <div className="title">
                    <a href="#">Free to play Vegas</a>
                  </div>
                  <div className="sub">
                    <div className="sub-item">
                      <i className="icon-remaining" />
                      <p>Contest No: Lo43</p>
                    </div>
                    <div className="sub-item">
                      <i className="icon-ticket" />
                      <p>
                        <span className="fw-6">9320</span> Remaining
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /sidebar-contest */}
            {/* sidebar-lottery */}
            <div className="sidebar-lottery">
              <div className="heading">
                <div className="icon">
                  <img
                    alt=""
                    src="/images/item/item-2.png"
                    width={48}
                    height={48}
                  />
                </div>
                Lottery results
              </div>
              <div className="wrap">
                <ul className="lottery-list">
                  <li className="">12</li>
                  <li className="">88</li>
                  <li className="">26</li>
                  <li className="">95</li>
                  <li className="">47</li>
                  <li className="active">17</li>
                  <li className="active">34</li>
                  <li className="">12</li>
                  <li className="">88</li>
                  <li className="">26</li>
                  <li className="">95</li>
                  <li className="">47</li>
                  <li className="active">17</li>
                  <li className="active">34</li>
                  <li className="">12</li>
                  <li className="">88</li>
                  <li className="">26</li>
                  <li className="">95</li>
                  <li className="">47</li>
                  <li className="active">17</li>
                  <li className="active">34</li>
                  <li className="">12</li>
                  <li className="">88</li>
                  <li className="">26</li>
                  <li className="">95</li>
                  <li className="">47</li>
                  <li className="active">17</li>
                  <li className="active">34</li>
                  <li className="">12</li>
                  <li className="">88</li>
                  <li className="">26</li>
                  <li className="">95</li>
                  <li className="">47</li>
                  <li className="active">17</li>
                  <li className="active">34</li>
                </ul>
              </div>
            </div>
            {/* /sidebar-lottery */}
            {/* sidebar-support */}
            <SupportForm />
            {/* /sidebar-support */}
          </div>
          {/* /wrap-sidebar-dashboard */}
          {/* button-sidebar-dashboard */}
          <RightSidebarToggler />
          {/* /button-sidebar-dashboard */}
        </div>
        {/* /sidebar-dashboard */}
        {/* main-content */}
        <div className="main-content-dashboard-wrap">
          {/* main-content */}
          <DashboardMobileMenu />

          {children}

          {/* /main-content */}
        </div>
        {/* /main-content */}
      </div>
    </>
  );
}
