import React from "react";
import Image from "next/image";
import CountdownTimer from "../common/Countdown";
import { gameData } from "@/data/contests";
import Link from "next/link";
export default function CurrentContest() {
  return (
    <section className="section-online-lottery">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <div className="title wow fadeInUp" data-wow-delay="0s">
                Current contest
              </div>
              <p className="fs-14">
                Check your ticket number's to see if you are a Winner in the
                Dream Lottery.
              </p>
            </div>
          </div>
          <div className="wrap-our-jackpot">
            <div className="row">
              <div className="col-lg-8">
                <div className="wg-our-jackpot">
                  <div className="content">
                    <div className="title">
                      <h2 className="title">Our Biggest Jackpot</h2>
                    </div>
                    <div className="price">
                      <p className="sub">PRIZE POOL</p>
                      <p className="text-color-clip fs-70">
                        $140 <span className="fs-40">million</span>
                      </p>
                    </div>
                    <div className="time">
                      <p>Draw closes in 2 days</p>
                      <span className="js-countdown">
                        <CountdownTimer />
                      </span>
                    </div>
                  </div>
                  <div className="wrap-image">
                    <Image
                      alt=""
                      src="/images/section/our-jackpot-2.png"
                      width={510}
                      height={492}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="wg-get-ticket">
                  <h5 className="title">Could you be the</h5>
                  <p className="text-color-clip style-2">next winner?</p>
                  <div className="wrap-image">
                    <Image
                      alt=""
                      src="/images/section/get-ticket.png"
                      width={542}
                      height={280}
                    />
                  </div>
                  <a href="#" className="tf-btn">
                    Get your ticket
                    <i className="icon-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-column-4">
            {gameData.map((game, index) => (
              <div
                key={index}
                className="wg-game style-6 wow fadeInUp"
                data-wow-delay={game.delay}
              >
                <div className="wg-game-image">
                  <Image
                    alt=""
                    src={game.imgSrc}
                    width={game.width}
                    height={game.height}
                  />
                </div>
                <div className="content">
                  <h4 className="title fw-9">
                    <Link href={`/contest-details/${game.id}`}>
                      {game.title}
                    </Link>
                  </h4>
                  <ul className="sub-title-list">
                    <li className="item">
                      <i className="icon-remaining" />
                      <p>Contest No: {game.contestNo}</p>
                    </li>
                    <li className="item">
                      <i className="icon-ticket" />
                      <p>
                        <span>{game.remaining}</span> Remaining
                      </p>
                    </li>
                  </ul>
                  <p className="text fs-14 fw-9">RRP</p>
                  <p className="money text-color-clip fs-50">
                    ${game.winAmount}
                  </p>
                  <p className="million fs-14 fw-9">Million</p>
                  <div className="wg-countdown">
                    <span className="js-countdown">
                      <CountdownTimer />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
