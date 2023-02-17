import React, { useEffect } from "react";
import lottie from "lottie-web";
import AOS from "aos";
import "aos/dist/aos.css";
import animationData from "../animation/home-section-one.json";
import animationReport from "../animation/report.json";
import animationProtect from "../animation/identity-protection.json";
import FQA from "../animation/FQA.json";
import protection from "../animation/protection.json";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";
import "./marketplace/style.css";

export default function Home() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#home-data"),
      animationData: animationData,
    });
  }, []);
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
                Credit Score
                <br /> Monitoring Services
              </h1>
              <div className="hero-sub-text">
                <p>
                  In today's world, a lot of things depend on your credit-loan
                  approvals, insurance premiums, even the success of job
                  applications. Having a good grasp on your credit can help you
                  get ahead in life and save you time and money.
                </p>
                <a
                  href="http://app.myryze.com/redirect.asp?GUID=IUXWN386XWH3"
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
            </div>
          </div>
        </div>
      </div>
      <section
        className="we-offer-area text-center bg-gray"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-section">
                <h2 className="title">
                  Our <span>Features</span>
                </h2>
                <p className="description">
                  The highest quality data for fast, reliable decisioning
                </p>
              </div>
            </div>
          </div>
          <div className="row our-offer-items less-carousel">
            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i class="uil uil-monitor-heart-rate"></i>
                <h4>Credit Monitoring</h4>
                <p>
                  {" "}
                  We monitor all three of your credit reports 24/7 and 365 days
                  a year.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i class="uil uil-exclamation-triangle"></i>
                <h4>Identity Protection</h4>
                <p>
                  RYZE helps you to act immediately whenever anything suspicious
                  occurs.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 equal-height">
              <div className="item">
                <i class="uil uil-shield-question"></i>
                <h4>Credit FAQs</h4>
                <p>
                  Know what your score and reports mean with help from our
                  credit education center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-three">
        <div className="container">
          <h1 className="section-three-title"> What can RYZE do for you? </h1>
          <div>
            <div className="item-one">
              <div className="row">
                <div
                  className="col-lg-12 col-xl-6"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    id="item-one-graph"
                    style={{ width: "75%", height: "90%" }}
                    data-aos="flip-up"
                  ></div>
                </div>
                <div
                  className="col-lg-12 col-xl-6 custom-col"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="design-card" data-aos="fade-left">
                    <h1>Credit Monitoring</h1>
                    <p>
                      A credit monitoring service acts as both a personal
                      assistant and watchdog when it comes to your credit.{" "}
                      <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        RYZE's
                      </span>{" "}
                      credit report monitoring service gives you frequent access
                      to <span>THREE CREDIT BUREAUS's</span> credit history, so
                      you can check your credit report as often as you like.{" "}
                    </p>
                    <p style={{ marginBottom: "30px" }}>
                      Monthly Membership for just $24.95 automatically billed to
                      account
                    </p>

                    <a
                      href="http://app.myryze.com/redirect.asp?GUID=IUXWN386XWH3"
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
            <div className="item-two">
              <div className="row" style={{ marginTop: "50px" }}>
                <div
                  className="col-lg-12 col-xl-6"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    id="item-two-graph"
                    style={{ width: "90%", height: "80%" }}
                    data-aos="flip-up"
                  ></div>
                </div>
                <div
                  className="col-lg-12 col-xl-6 custom-col"
                  style={{
                    paddingTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="design-card" data-aos="fade-left">
                    <h1>Identity Protection</h1>
                    <p>
                      <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        RYZE
                      </span>{" "}
                      won't prevent you from being targeted by identity thieves,
                      but it can certainly help mitigate the damage. Getting
                      alerts whenever changes occur on your credit report or to
                      your score can be a great way to cut identity thieves off
                      at the pass.
                    </p>
                    <p style={{ marginBottom: "30px" }}>
                      Monthly Membership for just $9.99 automatically billed to
                      account
                    </p>

                    <a
                      href="https://app.myryze.com/signup_arIDP12.asp?GUID=R1XNY2DDYAS2"
                      className="cta"
                    >
                      <span style={{ fontSize: "0.9rem", color: "white" }}>
                        Action Now
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
              </div>
            </div>
            <div className="item-three">
              <div className="row" style={{ marginTop: "50px" }}>
                <div
                  className="col-lg-12 col-xl-6"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    id="item-three-graph"
                    style={{ width: "100%", height: "100%" }}
                    data-aos="flip-up"
                  ></div>
                </div>
                <div
                  className="col-lg-12 col-xl-6 custom-col"
                  style={{
                    paddingTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="design-card" data-aos="fade-left">
                    <h1> Frequently Asked Questions </h1>
                    <p style={{ paddingBottom: "1.2em" }}>
                      Get the answers you need to commonly asked questions about
                      managing your credit.
                    </p>
                    <a
                      href="https://app.myryze.com/memberfaq.asp"
                      className="cta"
                    >
                      <span style={{ fontSize: "0.9rem", color: "white" }}>
                        Get Answers
                      </span>
                      <svg width="1rem" height="1.2rem" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" style={{ stroke: "white" }}></path>
                        <polyline
                          points="8 1 12 5 8 9"
                          style={{ stroke: "white" }}
                        ></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section-container">
        <Testimonial />
      </div>
    </>
  );
}
