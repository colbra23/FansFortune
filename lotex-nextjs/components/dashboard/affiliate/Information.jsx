import React from "react";
import Image from "next/image";
export default function Information() {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <div
            className="heading-dashboard page-affiliate mb-30 wow fadeInUp"
            data-wow-delay="0s"
          >
            Your information
          </div>
          <div className="wg-infomation">
            <div className="row">
              <div className="col-md-6">
                <div className="left mb-20-mobile">
                  <div className="image">
                    <Image
                      alt=""
                      src="/images/avatar/information-1.png"
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="name">
                      Robert Fox
                      <Image
                        alt=""
                        src="/images/avatar/vie.png"
                        width={40}
                        height={41}
                      />
                    </div>
                    <div className="meta">
                      <div className="meta-item">
                        <i className="icon-level" />
                        Level 1
                      </div>
                      <div className="meta-item">
                        <i className="icon-rev-share" />
                        11% commission
                      </div>
                    </div>
                    <div className="bot">
                      <div className="item">
                        <div className="item-icon">
                          <Image
                            alt=""
                            src="/images/item/coin.png"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div>
                          <div className="price">$0.00</div>
                          <div className="sub">Available</div>
                        </div>
                      </div>
                      <a href="#" className="tf-btn">
                        Claim
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right">
                  <div className="title">
                    <i className="icon-statistics" />
                    Statistics
                  </div>
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item-icon">
                          <Image
                            alt=""
                            src="/images/item/statistics-1.png"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div>
                          <div className="price">$0.00</div>
                          <div className="sub">Total earnings</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item-icon">
                          <Image
                            alt=""
                            src="/images/item/statistics-2.png"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div>
                          <div className="price">2</div>
                          <div className="sub">Users Referred</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item-icon">
                          <Image
                            alt=""
                            src="/images/item/statistics-3.png"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div>
                          <div className="price">$0.00</div>
                          <div className="sub">Earnings last 30 days</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="the-vault-content">
            <div className="right">
              <div>
                <div className="title">Your referral link</div>
                <div className="box-link style-1">
                  <input
                    id="coppy1"
                    type="text"
                    placeholder=""
                    className="box-link-content"
                    name="text"
                    tabIndex={2}
                    defaultValue="Http://likeafaucet.com/r/e8ac..."
                    aria-required="true"
                    required
                  />
                  <label htmlFor="coppy1" className="button-edit">
                    <i className="icon-write" />
                  </label>
                  <div className="button-coppy">
                    <i className="icon-coppy" />
                    Copy link
                  </div>
                </div>
              </div>
              <div>
                <div className="title">Share your referral link</div>
                <div>
                  <ul className="tf-social style-1">
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
                        <i className="icon-discord" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
