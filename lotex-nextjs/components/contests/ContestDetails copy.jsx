"use client";
import Image from "next/image";
import CountdownTimer from "../common/Countdown";
import Descriptions from "./Descriptions";
import { useState } from "react";
import Link from "next/link";
import TokenPacksCarousel from "../token-packs/TokenPacksCarousel";
import ContestEntryForm from "../contest-entry/ContestEntryForm";

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
            <div className="wg-countdown">
              <h5 className="title">Countdown to the end of the contest:</h5>
              <span className="js-countdown style-2">
                <CountdownTimer />
              </span>
            </div>
            <ContestEntryForm />
          </div>
        </div>
        {/* Token Packs Carousel */}
        <div className="col-lg-12 wow fadeInRight" data-wow-delay="0s">
          <TokenPacksCarousel />
        </div>
        {/* /Token Packs Carousel */}
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
