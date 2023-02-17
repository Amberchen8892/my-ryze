import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";
import Spline from "@splinetool/react-spline";
import "../App.css";
import googleIcon from "../images/google (1).png";
import igIcon from "../images/instagram.png";
import moneyIcon from "../images/money-bag (1).png";
import cyrusLogo from "../images/logo-white.svg";
import ryzeLogo from "../images/logo-ryze.png";
import upArrow from "../images/up.png";
import FQA from "../animation/FQA.json";
import protection from "../animation/protection.json";
import animationReport from "../animation/report.json";
export default function CreditMonitoring() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#item-one-graph"),
      animationData: animationReport,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#item-two-graph"),
      animationData: protection,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#item-three-graph"),
      animationData: FQA,
    });
  }, []);
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
                Monitor Your Credit and Protect Your Finances
                <br /> with Our Service
              </h1>
              <div className="hero-sub-text">
                <p>
                  {" "}
                  Your credit score is one of the most important factors in your
                  financial health. A good score can open doors to lower
                  interest rates, better credit cards, and higher loan amounts.
                  But with the prevalence of identity theft and credit fraud,
                  monitoring your credit is more important than ever. Our credit
                  monitoring service keeps an eye on your credit report and
                  alerts you to any suspicious activity, so you can take action
                  before it's too late. With our service, you can have peace of
                  mind knowing that your finances are protected and your credit
                  is in good hands. Sign up today and take the first step
                  towards a brighter financial future.
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
                className="spline-3"
                scene="https://prod.spline.design/IhBih1yK0jv3IfSI/scene.splinecode"
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
                <img src={upArrow} />
              </div>
              <div className="contentBx">
                <h3 style={{ paddingTop: "5px" }}>
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
              <div className="imgBx" style={{ height: "110px" }}>
                <img className="logo-ryze" src={ryzeLogo} />
              </div>
              <div className="contentBx">
                <h3>
                  2K<span>+</span>
                  <br />
                </h3>
              </div>
            </div>
            <div className="sci">
              <p style={{ textAlign: "center" }}>
                This year, RYZE has been able to recover numerous accounts.
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
                  <span>$</span>5.8B
                  <br />
                </h3>
              </div>
            </div>
            <div className="sci">
              <p style={{ textAlign: "center" }}>
                The impact of identity theft on Americans in 2021 was reflected
                in their significant financial losses.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="header-section">
          <h2 className="title" style={{ textAlign: "center" }}>
            Your <span>Benefits</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row spline-wrapper">
          <div className="col-lg-6 col-md-12">
            <Spline
              className="spline-4"
              scene="https://prod.spline.design/3y9neQIt6u1x-DWZ/scene.splinecode"
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
                <h3>Credit Report 3 Bureau + Score</h3>
                <p>
                  Access your credit score and receive an in-depth credit report
                  from the bureau of your preference.
                </p>
                <h3>Credit Score Simulator</h3>
                <p>
                  Visualize how your credit score could be affected by your
                  future decisions or behaviors.
                </p>
                <h3> Debt Analysis </h3>
                <p style={{ paddingBottom: "50px" }}>
                  Get a complete picture of your finances with your total
                  balance, monthly payments, and debt-to-income ratio calculator
                  displayed.
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
    </>
  );
}
