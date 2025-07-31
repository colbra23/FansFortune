import React from "react";

import TyperAnimation from "@/components/common/TyperAnimation";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      {/* page-title-home-1 */}
      <div className="page-title-home-1">
        {/* <img class="item-page-title-home-1"  alt=""    src="/images/item/page-title-1.png" width="1920" height="1018" /> */}
        <img
          className="coin item-1"
          alt=""
          src="/images/item/coin-3.png"
          width={98}
          height={109}
        />
        <img
          className="coin item-2"
          alt=""
          src="/images/item/coin-4.png"
          width={80}
          height={96}
        />
        <img
          className="coin item-3"
          alt=""
          src="/images/item/coin-5.png"
          width={75}
          height={57}
        />
        <img
          className="coin item-4"
          alt=""
          src="/images/item/coin-6.png"
          width={74}
          height={68}
        />
        <img
          className="coin item-5"
          alt=""
          src="/images/item/coin-7.png"
          width={115}
          height={99}
        />
        <img
          className="coin item-6"
          alt=""
          src="/images/item/coin-8.png"
          width={76}
          height={69}
        />
        <img
          className="coin item-7"
          alt=""
          src="/images/item/ball.png"
          width={192}
          height={191}
        />
        <img
          className="coin item-8"
          alt=""
          src="/images/item/ball-1.png"
          width={177}
          height={176}
        />
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-page-title">
                <p className="title">
                  Become The Owner of
                  <span className="d-block animationtext clip">
                    <TyperAnimation
                      strings={[
                        "Your Dream Car ",
                        "Your Dream Car ",
                        "Your Dream Car ",
                      ]}
                    />
                  </span>
                </p>
                <p className="sub-title">
                  Opportunities are waiting for you. Do you want to grab it and
                  <br />
                  be our next lucky winner?
                </p>
                <Link to={`/contest`} className="tf-btn">
                  Play form $25 <i className="icon-right" />
                </Link>
                <div className="item-car">
                  <img
                    alt=""
                    src="/images/item/page-title-car.png"
                    width={1316}
                    height={608}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
