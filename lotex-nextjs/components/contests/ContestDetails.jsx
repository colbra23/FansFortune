"use client";
import Image from "next/image";
import CountdownTimer from "../common/Countdown";
import Descriptions from "./Descriptions";
import TokenPacksCarousel from "./TokenPacksCarousel";
import { useState } from "react";
import ContestEntryForm from "./ContestEntryForm";
export default function ContestDetails({ contest }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="tf-container tf-spacing-1">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-page">
            <p className="sub-title type-main-color">
              The chance to win belongs to you
            </p>
            <h2 className="title">
              {contest.title ? contest.title : "The Lotex Lottery IX"}
            </h2>
            <p className="text type-secondary">
              This competition has a maximum of 12,940 entries.
            </p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="content">
            <ContestEntryForm />
          </div>
        </div>
        {/* progress-wrap */}
        <div className="col-lg-12">
          <TokenPacksCarousel />
        </div>
        <div className="col-lg-12">
          <div className="wg-social">
            <p className="caption type-secondary">Share this contest</p>
            <ul className="list-social">
              <li className="item">
                <a href="#" className="">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li className="item">
                <a href="#" className="">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li className="item">
                <a href="#" className="">
                  <i className="icon-tiktok" />
                </a>
              </li>
              <li className="item">
                <a href="#" className="">
                  <i className="icon-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12">
          <Descriptions />
        </div>
      </div>
    </div>
  );
}
