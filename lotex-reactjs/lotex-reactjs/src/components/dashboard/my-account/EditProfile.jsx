import React, { useState } from "react";

export default function EditProfile() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  return (
    <div className="my-account-profile">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="fw-9 pb-34 wow fadeInUp" data-wow-delay="0s">
              Edit profile
            </h3>
            <div className="profile-avatar">
              <div className="heading-left">
                <h4
                  className="title fw-9 mb-6 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Avatar
                </h4>
                <p className="sub-title fw-4 type-secondary">
                  Edit your profile picture
                </p>
              </div>
              <div className="edit-avatar relative">
                <div className="image">
                  <img
                    id="previewAvt"
                    alt=""
                    src="/images/section/member-3.jpg"
                    width={381}
                    height={396}
                  />
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </div>
                <button id="chooseImageChange" className="ic-edit">
                  <i className="icon-write" />
                </button>
                <button className="ic-del">
                  <i className="icon-delete" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="profile-infor">
              <div className="heading-left">
                <h4
                  className="title fw-9 mb-6 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Personal infomation
                </h4>
                <p className="sub-title fw-4 type-secondary mb-30">
                  Change your identity information
                </p>
                <button
                  type="submit"
                  form="form-infor"
                  className="tf-btn style-3 pd-0-46"
                >
                  Save
                </button>
              </div>
              <div className="edit-infor">
                <form
                  action="#"
                  className="form-infor"
                  id="form-infor"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="cols mb-30">
                    <fieldset>
                      <label>Your name</label>
                      <input
                        className="p-10-19"
                        type="text"
                        required
                        placeholder="Your name"
                      />
                    </fieldset>
                  </div>
                  <div className="cols mb-30 has-verified">
                    <fieldset>
                      <label>Email address</label>
                      <input
                        className="p-10-19"
                        type="email"
                        required
                        placeholder="Your email"
                      />
                    </fieldset>
                    <div className="verified done">
                      <i className="icon-check-1" />
                      <p className="text fs-14">Email verified</p>
                    </div>
                  </div>
                  <div className="cols has-verified">
                    <fieldset className="fieldPhoneNumber">
                      <label>Phone (optional)</label>
                      <input
                        type="tel"
                        className="phoneInpu p-10-19t"
                        id="phoneInput"
                        required
                        placeholder={"0123456789"}
                      />
                    </fieldset>
                    <div className="verified dont">
                      <i className="icon-infor-1 fs-20" />
                      <p className="text fs-14">Not verified</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="profile-security">
              <div className="heading-left">
                <h4
                  className="title fw-9 mb-6 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Security
                </h4>
                <p className="sub-title fw-4 type-secondary mb-30">
                  Last change: 12 days ago
                </p>
                <button
                  type="submit"
                  form="form-security"
                  className="tf-btn style-3 pd-0-46"
                >
                  Save
                </button>
              </div>
              <div className="edit-password">
                <form
                  action="#"
                  id="form-security"
                  className="form-security"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="cols mb-30 relative has-verified z-5">
                    <fieldset>
                      <label>Password *</label>
                      <input
                        className="password p-10-19"
                        id="pass2"
                        type={showPass ? "text" : "password"}
                        required
                        placeholder="Password"
                      />
                      <span
                        onClick={() => setShowPass((pre) => !pre)}
                        className={`toggle-password ${
                          showPass ? "unshow" : ""
                        } first-time`}
                      >
                        <i className="icon-view" />
                      </span>
                    </fieldset>
                    <div className="verified-wrap">
                      <div className="verified-item item-check">
                        <i className="icon-close" />
                        <p className="text">8 character</p>
                      </div>
                      <div className="verified-item">
                        <i className="icon-close" />
                        <p className="text">Capital &amp; small</p>
                      </div>
                      <div className="verified-item">
                        <i className="icon-close" />
                        <p className="text">Numbers</p>
                      </div>
                      <div className="verified-item">
                        <i className="icon-close" />
                        <p className="text">Symbols</p>
                      </div>
                    </div>
                  </div>
                  <div className="cols relative has-verified z-5">
                    <fieldset>
                      <label>Confirm password *</label>
                      <input
                        className="password p-10-19"
                        id="confirmPass2"
                        type={showPass2 ? "text" : "password"}
                        required
                        placeholder="Password"
                      />
                      <span
                        onClick={() => setShowPass2((pre) => !pre)}
                        className={`toggle-password ${
                          showPass2 ? "unshow" : ""
                        } second-time`}
                      >
                        <i className="icon-view" />
                      </span>
                    </fieldset>
                    <div className="verified-wrap type-confirm">
                      <div className="verified-item">
                        <i className="icon-check-1" />
                        <div className="notice mt--8">
                          <p className="notice fw-550 fs-14">
                            Two-step authentication
                          </p>
                          <p className="notice fw-4 fs-14">
                            If you active this check then any time you want to
                            log in you have to confirm your self with email or
                            text
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
