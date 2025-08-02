import Image from "next/image";
import CountdownTimer from "../common/Countdown";
import Descriptions from "./Descriptions";
import TokenPacksCarousel from "./TokenPacksCarousel";
import TokenPacksCarousel from "./TokenPacksCarousel";
import TokenPacksCarousel from "./TokenPacksCarousel";
import TokenPacksCarousel from "./TokenPacksCarousel";
import { useState } from "react";
import Link from "next/link";
export default function ContestDetails({ contest }) {
  return (
    <div className="tf-container tf-spacing-1">
      <div className="row">
        <div className="col-lg-12">
          <div className="content">
            <div className="wg-countdown">
              <h5 className="title">Countdown to the end of the contest:</h5>
              <span className="js-countdown style-2">
                <CountdownTimer />
              </span>
            </div>
            <div className="image">
              <Image
                alt=""
                src="/images/item/page-title-car.png"
                width={1316}
                height={608}
              />
            </div>
          </div>
        </div>
        {/* progress-wrap */}
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0s">
          <div className="wrap-progress">
            <div className="header-progress">
              <div className="content-right">
                Tickets Sold: <span>734</span>
              </div>
              <span>12,940</span>
            </div>
            <div className="progress">
              <div className="progress-bar">
                <div
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={1400}
                  role="progressbar"
                />
              </div>
            </div>
            <p>Only 12,206 remaining!</p>
          </div>
        </div>
        {/* /progress-wrap */}
        {/* price-wrap */}
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0s">
          <div className="price-wrap">
            <div className="price">
              $1,99
              <p>/ per ticket</p>
            </div>
            <div className="wrap-quatity">
              <div className="wg-quantity">
                <span
                  className="btn-quantity plus-btn"
                  onClick={() => setQuantity((pre) => pre + 1)}
                >
                  <i className="icon-plus" />
                </span>
                <input type="text" value={quantity} name="number" readOnly />
                <span
                  className="btn-quantity minus-btn"
                  onClick={() => setQuantity((pre) => (pre == 1 ? 1 : pre - 1))}
                >
                  <i className="icon-minus" />
                </span>
              </div>
              <div className="btn-buy-tickets">
                <Link className="tf-btn" href={`/contest`}>
                  <i className="icon-tickets" />
                  Buy Tickets
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /price-wrap */}
        <div className="col-lg-12">
          <TokenPacksCarousel />
        </div>
        <div className="col-lg-12">
          <TokenPacksCarousel />
        </div>
        <div className="col-lg-12">
          <TokenPacksCarousel />
        </div>
        <div className="col-lg-12">
        </div>
        <div className="col-lg-12">
          <div className="wg-social">
            <p className="caption type-secondary">Share this contest</p>
            <ul className="list-social">
  )
}