import { Link } from "react-router-dom";
import React from "react";

export default function Register() {
  return (
    <div className="modal fade modalCenter" id="modalregister">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-sm">
          <div className="register-wrap">
            <div className="image">
              <img
                className="lazyload"
                data-src="/images/section/register.png"
                alt=""
                src="/images/section/register.png"
                width={1800}
                height={1800}
              />
            </div>
            <div className="content">
              <div className="close-form">
                <a href="#" className="btn-hide-popup" data-bs-dismiss="modal">
                  <i className="icon-close" />
                </a>
              </div>
              <h4 className="title">Open Your FREE Account</h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                id="form-register"
                className="form-register"
              >
                <div className="cols mb-20">
                  <fieldset>
                    <label htmlFor="field2">Your email *</label>
                    <input
                      id="field2"
                      type="email"
                      required
                      placeholder="Your email"
                    />
                  </fieldset>
                </div>
                <div className="cols mb-20 relative">
                  <fieldset>
                    <label htmlFor="pass">Password *</label>
                    <input
                      className="password"
                      id="pass1"
                      type="password"
                      required
                      placeholder="Password"
                    />
                    <span className="toggle-password first-time">
                      <i className="icon-view" />
                    </span>
                  </fieldset>
                </div>
                <div className="cols mb-20 relative">
                  <fieldset>
                    <label htmlFor="confirmPass1">Confirm password *</label>
                    <input
                      className="password"
                      id="confirmPass1"
                      type="password"
                      required
                      placeholder="Password"
                    />
                    <span className="toggle-password second-time">
                      <i className="icon-view" />
                    </span>
                  </fieldset>
                </div>
                <div className="checkbox-item mb-10">
                  <label className="mb-0">
                    <span className="">
                      I have read and accept the
                      <a href="#" className="notice type-secondary">
                        Terms of Use
                      </a>
                      and the
                      <a href="#" className="notice type-secondary">
                        Privacy Notice
                      </a>
                    </span>
                    <input type="checkbox" required />
                    <span className="btn-checkbox" />
                  </label>
                </div>
                <div className="checkbox-item">
                  <label>
                    <span className="">
                      Yes, I want to receive exclusive deals and discounts!
                    </span>
                    <input type="checkbox" required />
                    <span className="btn-checkbox" />
                  </label>
                </div>
                <button type="submit" className="btn-login tf-btn full-w">
                  Sign up
                </button>
              </form>
              <div className="text-login-with relative">
                <span className="fs-12">Or continue with social account</span>
              </div>
              <ul className="social-sign-list">
                <li className="sign-google">
                  <Link to={`/dashboard`} className="type-secondary">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1696 9.08734L12.196 9.08691C11.7997 9.08691 11.4785 9.40806 11.4785 9.80432V12.671C11.4785 13.0672 11.7997 13.3884 12.1959 13.3884H17.2493C16.696 14.8244 15.6632 16.0271 14.3455 16.7913L16.5002 20.5213C19.9567 18.5223 22.0002 15.0148 22.0002 11.0884C22.0002 10.5293 21.959 10.1297 21.8766 9.67967C21.814 9.33777 21.5171 9.08734 21.1696 9.08734Z"
                        fill="#167EE6"
                      />
                      <path
                        d="M10.9999 17.6954C8.52689 17.6954 6.36797 16.3442 5.20846 14.3447L1.47852 16.4946C3.37666 19.7844 6.9325 21.9997 10.9999 21.9997C12.9953 21.9997 14.878 21.4625 16.4999 20.5263V20.5211L14.3452 16.791C13.3595 17.3627 12.219 17.6954 10.9999 17.6954Z"
                        fill="#12B347"
                      />
                      <path
                        d="M16.5 20.5262V20.5211L14.3452 16.791C13.3596 17.3626 12.2192 17.6954 11 17.6954V21.9997C12.9953 21.9997 14.8782 21.4625 16.5 20.5262Z"
                        fill="#0F993E"
                      />
                      <path
                        d="M4.30435 10.9998C4.30435 9.78079 4.63702 8.64036 5.20854 7.65478L1.4786 5.50488C0.537195 7.12167 0 8.99932 0 10.9998C0 13.0002 0.537195 14.8779 1.4786 16.4947L5.20854 14.3448C4.63702 13.3592 4.30435 12.2188 4.30435 10.9998Z"
                        fill="#FFD500"
                      />
                      <path
                        d="M10.9999 4.30435C12.6126 4.30435 14.0939 4.87738 15.2509 5.83056C15.5363 6.06568 15.9512 6.04871 16.2127 5.78725L18.2438 3.75611C18.5405 3.45946 18.5193 2.97387 18.2024 2.69895C16.2639 1.0172 13.7416 0 10.9999 0C6.9325 0 3.37666 2.21534 1.47852 5.50511L5.20846 7.65501C6.36797 5.65555 8.52689 4.30435 10.9999 4.30435Z"
                        fill="#FF4B26"
                      />
                      <path
                        d="M15.251 5.83056C15.5364 6.06568 15.9513 6.04871 16.2128 5.78725L18.2439 3.75611C18.5405 3.45946 18.5194 2.97387 18.2025 2.69895C16.264 1.01716 13.7417 0 11 0V4.30435C12.6126 4.30435 14.094 4.87738 15.251 5.83056Z"
                        fill="#D93F21"
                      />
                    </svg>
                    <span>Sign in with Google</span>
                  </Link>
                </li>
                <li className="sign-facebook">
                  <Link to={`/dashboard`} className="type-secondary">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_502_3309)">
                        <path
                          d="M22 11C22 16.4905 17.9773 21.0414 12.7188 21.8664V14.1797H15.2818L15.7695 11H12.7188V8.93664C12.7188 8.06652 13.145 7.21875 14.5114 7.21875H15.8984V4.51172C15.8984 4.51172 14.6395 4.29688 13.4359 4.29688C10.9235 4.29688 9.28125 5.81969 9.28125 8.57656V11H6.48828V14.1797H9.28125V21.8664C4.02273 21.0414 0 16.4905 0 11C0 4.92508 4.92508 0 11 0C17.0749 0 22 4.92508 22 11Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M15.2818 14.1797L15.7695 11H12.7188V8.9366C12.7188 8.0667 13.1449 7.21875 14.5114 7.21875H15.8984V4.51172C15.8984 4.51172 14.6396 4.29688 13.4361 4.29688C10.9235 4.29688 9.28125 5.81969 9.28125 8.57656V11H6.48828V14.1797H9.28125V21.8663C9.8413 21.9542 10.4153 22 11 22C11.5847 22 12.1587 21.9542 12.7188 21.8663V14.1797H15.2818Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_502_3309">
                          <rect width={22} height={22} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Sign in with Facebook</span>
                  </Link>
                </li>
              </ul>
              <p className="bottom-form">
                Already registered?{" "}
                <a
                  href="#modallogin"
                  data-bs-toggle="modal"
                  className="type-main-color"
                >
                  Click here
                </a>{" "}
                to login.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
