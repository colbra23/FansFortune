"use client";
import { contestCards } from "@/data/contests";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CountdownTimer from "@/components/common/Countdown";
import Link from "next/link";
export default function Contests3() {
  return (
    <section className="s-feature-game tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section mb-40">
              <h2 className="title mb-6">New &amp; Featured Games</h2>
              <p className="sub-title">Find Your Favorite Way to Play</p>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              className="swiper-container slide-feature-game wow fadeInUp"
              data-wow-delay="0s"
              {...{
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                pagination: { el: ".pagination-feature-game", clickable: true },
                breakpoints: {
                  1: {
                    slidesPerView: 1,
                  },
                  650: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                },
              }}
              modules={[Pagination]}
            >
              {contestCards.map((card, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="wg-game style-5 hover-img"
                    style={{ animationDelay: card.delay }}
                  >
                    <div className="wg-game-image image-wrap">
                      <Image
                        className="lazyloaded"
                        data-src={card.imgSrc}
                        alt=""
                        src={card.imgSrc}
                        width={card.width}
                        height={card.height}
                      />
                      <span className="js-countdown text-left">
                        <CountdownTimer />
                      </span>
                    </div>
                    <div className="content">
                      <div className="heading">
                        <h4 className="title fw-9">
                          <Link href={`/contest-details/${card.id}`}>
                            {card.title}
                          </Link>
                        </h4>
                        <ul className="sub-title-list">
                          <li className="item">
                            <i className="icon-remaining" />
                            <p>Contest No: {card.contestNo}</p>
                          </li>
                          <li className="item">
                            <i className="icon-ticket" />
                            <p>
                              <span>{card.remaining}</span> Remaining
                            </p>
                          </li>
                        </ul>
                        <p className="text fs-14 fw-9">Win up to</p>
                        <p className="money text-color-clip style-6">
                          $
                          {card.winAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 3,
                          })}
                        </p>
                        <Link
                          href={`/contest-details/${card.id}`}
                          className="tf-btn"
                        >
                          {card.tokenCost || 25} Tokens To Play <i className="icon-right"> </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination pagination-feature-game pagination-rectangle style-1" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
