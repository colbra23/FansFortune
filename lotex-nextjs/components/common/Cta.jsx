import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <section className="section-dowload-app">
            <div className="wrapper">
              <div className="content">
                <div className="title wow fadeInUp">
                  Play the lottery anytime, <br />
                  anywhere, even on the go
                </div>
                <p className="wow fadeInUp">
                  Play the lottery anytime, anywhere with our convenient mobile
                  app. <br />
                  Download now and start winning!
                </p>
              </div>
              <div className="bottom wow fadeInUp">
                <div className="btn-dowload">
                  <a href="#">
                  {/* <Image
                      alt=""
                      src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      width={519}
                      height={174}
                    /> */}
                  </a>
                </div>
                <div className="btn-dowload">
                  <a href="#">
                  {/* <Image
                      alt=""
                      src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      width={519}
                      height={174}
                    /> */}
                  </a>
                </div>
              </div>
              <div
                className="item-1 wow fadeInRight"
                data-wow-delay="0.3s"
                data-wow-duration="4s"
              >
              {/* <Image
                  alt=""
                  src="https://images.pexels.com/photos/3586062/pexels-photo-3586062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  width={1085}
                  height={320}
                /> */}
              </div>
              <div
                className="item coin-1 wow fadeInDown"
                data-wow-delay="0.5s"
                data-wow-duration="3s"
              >
              {/* <Image
                  alt=""
                  src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  width={50}
                  height={50}
                /> */}
              </div>
              <div
                className="item coin-2 wow fadeInLeft"
                data-wow-delay="1s"
                data-wow-duration="3s"
              >
               {/* <Image
                  alt=""
                  src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  width={55}
                  height={54}
                /> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
