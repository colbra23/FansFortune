import React from "react";
import Image from "next/image";
export default function Steps() {
  return (
    <section className="section-getstarted page-how-to-work tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <div className="title">How to get started</div>
              <p>Follow these 3 easy steps!</p>
            </div>
          </div>
          <div className="grid-column-3">
            <div className="wrap-getstarted wow fadeInUp" data-wow-delay="0s">
              <div className="guide-number">
                <span>01</span>
              </div>
              <div className="getstart-item hover-item style-1 color-1">
                <div className="wrap-image image-item">
                  <Image
                    alt=""
                    src="/images/section/getstart-item-1.png"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">Choose contest</a>
                  </div>
                  <p>Register to LODE. &amp; Choose your contest</p>
                </div>
              </div>
            </div>
            <div className="wrap-getstarted wow fadeInUp" data-wow-delay="0.1s">
              <div className="guide-number">
                <span>02</span>
              </div>
              <div className="getstart-item hover-item style-1 color-2">
                <div className="wrap-image image-item">
                  <Image
                    alt=""
                    src="/images/section/getstart-item-2.png"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">Buy lucky numbers</a>
                  </div>
                  <p>Pick Your Numbers &amp; Complete your Purchase</p>
                </div>
              </div>
            </div>
            <div className="wrap-getstarted wow fadeInUp" data-wow-delay="0.2s">
              <div className="guide-number">
                <span>03</span>
              </div>
              <div className="getstart-item hover-item style-1 color-3">
                <div className="wrap-image image-item">
                  <Image
                    alt=""
                    src="/images/section/getstart-item-3.png"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">Take your victory</a>
                  </div>
                  <p>Dream big, you are about to reach success.</p>
                </div>
              </div>
            </div>
            <div className="item arow-1">
              <Image
                alt=""
                src="/images/icon/curved-arrow.png"
                width={438}
                height={390}
              />
            </div>
            <div className="item arow-2">
              <Image
                alt=""
                src="/images/icon/curved-arrow.png"
                width={438}
                height={390}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
