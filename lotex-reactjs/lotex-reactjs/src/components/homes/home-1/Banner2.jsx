import React from "react";

import CountdownTimer from "@/components/common/Countdown";
import { Link } from "react-router-dom";
export default function Banner2() {
  return (
    <section className="section-banner tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="banner-inner">
              <div className="banner-left">
                <div className="time">
                  <span className="js-countdown">
                    <CountdownTimer />
                  </span>
                </div>
                <div className="banner">
                  <span> Enter to win - Giveaway</span>
                </div>
                <div className="text-giveaway wow fadeInUp" data-wow-delay="0s">
                  Enter to win - Giveaway
                </div>
                <div className="text">Enter bonus draw for a chance to win</div>
                <Link to={`/contest-details/1`} className="tf-btn">
                  $25 To play <i className="icon-right" />
                </Link>
              </div>
              <div className="banner-img">
                <div className="image-1 wow fadeInRight" data-wow-delay="0s">
                  <img
                    src="/images/icon/banner-item.png"
                    alt=""
                    className="lazyload"
                    width={464}
                    height={359}
                  />
                </div>
                <div className="image-2">
                  <img
                    src="/images/item/coin-banner-1.png"
                    alt=""
                    className="lazyload"
                    width={72}
                    height={82}
                  />
                </div>
                <div className="image-3">
                  <img
                    src="/images/item/coin-banner-2.png"
                    alt=""
                    className="lazyload"
                    width={76}
                    height={54}
                  />
                </div>
                <div className="image-4">
                  <img
                    src="/images/item/coin-banner-3.png"
                    alt=""
                    className="lazyload"
                    width={40}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
