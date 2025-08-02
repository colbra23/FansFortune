"use client";
import { contestData } from "@/data/contests";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import CountdownTimer from "@/components/common/Countdown";
import SortingSelect from "@/components/common/SortingSelect";
import CategorySelect from "@/components/common/CategorySelect";
import PriceRangeSelect from "@/components/common/PriceRangeSelect";
import Link from "next/link";
export default function Contests() {
  const [filtered, setFiltered] = useState(contestData);
  const [currentCategory, setCurrentCategory] = useState("All");
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(contestData);
    } else {
      setFiltered(
        contestData.filter((elm) => elm.categories.includes(currentCategory))
      );
    }
  }, [currentCategory]);

  return (
    <section className="section-game">
      <div className="tf-container full">
        <div className="row">
          <div className="col-12">
            <div className="section-game-inner">
              <div className="heading-section pb-0">
                <div className="title wow fadeInUp" data-wow-delay="0s">
                  Win up to $250k
                </div>
                <p>With our Instant Win Games</p>
              </div>
              <div className="filter">
                <div className="tf-wrap-sort">
                  <SortingSelect />
                  <CategorySelect
                    selectedValue={currentCategory}
                    onChange={(value) => setCurrentCategory(value)}
                  />
                  <PriceRangeSelect />
                  <form
                    action="#"
                    className="form-search"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <fieldset>
                      <input type="text" placeholder="Search..." required />
                    </fieldset>
                    <button className="button-submit" type="submit">
                      <i className="icon-search" />
                    </button>
                  </form>
                </div>
              </div>
              <Swiper
                className="swiper-container"
                {...{
                  spaceBetween: 30,
                  slidesPerView: 5,
                  breakpoints: {
                    300: {
                      slidesPerView: 1,
                    },
                    550: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 5,
                    },
                  },
                  pagination: {
                    el: ".lottery-1",
                    clickable: true,
                  },
                }}
                modules={[Pagination]}
              >
                {filtered.slice(0, 6).map((card, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="wg-game style-5 hover-img">
                      <div className="wg-game-image image-wrap">
                        <Image
                          className="ls-is-cached lazyloaded"
                          data-src={card.imgSrc}
                          src={card.imgSrc}
                          alt=""
                          width={card.width}
                          height={card.height}
                         onClick={(e) => {
                           e.preventDefault();
                           if (typeof window !== 'undefined' && window.openPrizeModal) {
                             window.openPrizeModal(card.id);
                           }
                         }}
                         style={{ cursor: 'pointer' }}
                        />
                        <span className="js-countdown">
                          <CountdownTimer />
                        </span>
                      </div>
                      <div className="content">
                        <div className="heading">
                          <h4 className="title fw-9">
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                if (typeof window !== 'undefined' && window.openPrizeModal) {
                                  window.openPrizeModal(card.id);
                                }
                              }}
                              style={{ cursor: 'pointer', color: 'var(--White)' }}
                            >
                              {card.title}
                            </span>
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
                          <p className="text fs-14 fw-9">RRP</p>
                          <p className="money text-color-clip style-6">
                            ${card.winAmount.toLocaleString()}
                          </p>
                          <button
                            className="tf-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              const userTokens = 75; // Mock user token balance
                              const requiredTokens = card.tokenCost || 100;
                              
                              if (userTokens >= requiredTokens) {
                                // Player has enough tokens - go directly to contest
                                window.location.href = `/contest-details/${card.id}`;
                              } else {
                                // Player needs tokens - show token purchase modal
                                sessionStorage.setItem('contestEntryInProgress', 'true');
                                sessionStorage.setItem('targetContestId', card.id);
                                const tokenModal = document.getElementById('tokenPurchaseModal');
                                if (tokenModal) {
                                  import('bootstrap').then((bootstrap) => {
                                    const modal = new bootstrap.Modal(tokenModal);
                                    modal.show();
                                  });
                                }
                              }
                            }}
                          >
                            {card.tokenCost} Tokens To Play{" "}
                            <i className="icon-right"> </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="bottom">
                  <div className="swiper-pagination style-1 lottery-1 pagination-rectangle pt-34" />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
