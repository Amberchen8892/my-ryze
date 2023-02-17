import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";
import "../App.css";
import googleIcon from "../images/google (1).png";
import igIcon from "../images/instagram.png";
import moneyIcon from "../images/money-bag (1).png";
import cyrusLogo from "../images/logo-white.svg";
export default function Identity() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row hero-section-container">
            <div className="col-lg-12 col-xl-6 hero-text">
              <h1 className="card-title hero-title">
                The Ultimate Destination
                <br /> for Identity Protection
              </h1>
              <div className="hero-sub-text">
                <p>
                  {" "}
                  We've partnered with Cyrus, the industry leader in account
                  security, to provide our customers with top-of-the-line
                  protection against identity theft and fraud. you also get
                  access to a range of tools and resources to help you stay
                  informed and in control of your digital identity. From credit
                  monitoring to identity restoration services, we have
                  everything you need to protect yourself from the growing
                  threat of identity theft.
                </p>
                <a
                  href="https://join.cyrus.app/signup?pcode=MYRYZE"
                  className="cta"
                >
                  <span style={{ fontSize: "0.9rem", color: "white" }}>
                    Sign Up Now
                  </span>
                  <svg width="1rem" height="1.2rem" viewBox="0 0 13 10">
                    <path style={{ stroke: "white" }} d="M1,5 L11,5"></path>
                    <polyline
                      style={{ stroke: "white" }}
                      points="8 1 12 5 8 9"
                    ></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 ">
              <div
                className="marketplace-img home-page-img"
                id="home-data"
              ></div>
              <Spline
                className="spline-2"
                scene="https://prod.spline.design/JcEu4QrkHs1GO29O/scene.splinecode"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <h1 className="identity-statics">
            Losing everything to a hack is a real possibility
          </h1>
        </div>

        <div className="container-test">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={igIcon} />
              </div>
              <div className="contentBx">
                <h3>
                  2M<span>+</span>
                  <br />
                </h3>
              </div>
            </div>
            <div className="sci">
              <p style={{ textAlign: "center" }}>
                Cybercriminals regularly compromise Instagram accounts every
                year.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={moneyIcon} />
              </div>
              <div className="contentBx">
                <h3>
                  <span>+</span>70%
                  <br />
                </h3>
              </div>
            </div>
            <div className="sci">
              <p style={{ textAlign: "center" }}>
                The number of reported fraud cases has been steadily increasing
                over the past 2 years.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={googleIcon} />
              </div>
              <div className="contentBx">
                <h3>
                  15M<span>+</span>
                  <br />
                </h3>
              </div>
            </div>
            <div className="sci">
              <p style={{ textAlign: "center" }}>
                The security of Gmail accounts is frequently breached by
                hackers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="header-section">
          <h2 className="title" style={{ textAlign: "center" }}>
            Your <span>Package</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row spline-wrapper">
          <div className="col-lg-6 col-md-12">
            <Spline
              className="spline"
              scene="https://prod.spline.design/WOE5QmIwjnWLpHLC/scene.splinecode"
            />
          </div>
          <div
            className="col-lg-6 col-md-12 container-test"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="card"
              style={{
                width: "100%",
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              data-aos="fade-left"
            >
              <div className="content-card">
                <h3>Sign-Up</h3>
                <p>
                  Register with your personal email on the following page, and
                  upon confirming your registration in your inbox, you'll
                  receive full access to Cyrus at no cost during the trial
                  period.
                </p>
                <h3>Download the App</h3>
                <p>
                  The Cyrus app can be downloaded on both iOS and Android
                  devices.
                </p>
                <h3> Enjoy </h3>
                <p style={{ paddingBottom: "50px" }}>
                  You're now a part of the Cyrus security network. Need
                  assistance or have any questions? Our team is available to
                  chat with you!
                </p>
                <a
                  href="https://join.cyrus.app/signup?pcode=MYRYZE"
                  className="cta"
                >
                  <span style={{ fontSize: "0.9rem", color: "white" }}>
                    Start Now
                  </span>
                  <svg width="1rem" height="1.2rem" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" style={{ stroke: "white" }}></path>
                    <polyline
                      style={{ stroke: "white" }}
                      points="8 1 12 5 8 9"
                    ></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <h1 className="power-by">POWER BY:</h1>
          <img className="cyrus-logo" src={cyrusLogo} />
        </div>
      </div>
    </>
  );
}
