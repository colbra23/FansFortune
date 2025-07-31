import React from "react";
import Image from "next/image";
import CountdownTimer from "@/components/common/Countdown";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="section-cta tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="section-cta-inner">
              <div className="cta-content">
                <div className="text">One Millionaire Guaranteed</div>
                <p className="text-color-clip style-2">14 day to go!</p>
              </div>
              <div className="cta-middle">
                <div className="icon">
                  <Image
                    src="/images/icon/cta-item-1.png"
                    alt=""
                    className="lazyload"
                    width={208}
                    height={172}
                  />
                </div>
                <p className="money text-color-clip fs-50">$1Milion</p>
                <span className="js-countdown">
                  <CountdownTimer />
                </span>
              </div>
              <div className="cta-right text-center">
                <Link
                  href={`/contest`}
                  className="tf-btn border-node-backgroud"
                >
                  Play form $25 <i className="icon-right" />
                </Link>
                <div className="text-2">*Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
