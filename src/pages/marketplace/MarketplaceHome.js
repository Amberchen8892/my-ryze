import React from "react";
import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import "../marketplace/style.css";
import heroImg from "./img/marketplace.png";
import solars from "./img/solars.png";
function MarketplaceHome() {
  return (
    <>
      <div className="marketplace-hero-section">
        <div className="container">
          <div className="row hero-section-container">
            <div className="col-lg-12 col-xl-7 hero-text">
              <h1 className="card-title hero-title">
                Ryze Marketplace Gives Consumers Peace of Mind When Shopping for
                Financial Products.
              </h1>
              <div className="hero-sub-text">
                {" "}
                Our marketplace is an innovative new feature that allows members
                to shop for financial products with more certainty, transparency
                and simplicity.
              </div>
            </div>
            <div className="col-lg-12 col-xl-5 marketplace-img">
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-services"
        style={{
          backgroundColor: "#16213e",
          color: "white",
          paddingBottom: "120px",
          paddingTop: "80px",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">
                  Offer <span>Categories</span>
                </h2>
                <p className="description">
                  The highest quality data for fast, reliable decisioning
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Start Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-bell" />
                  <h3 className="title">Alarms</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Protection for every window, room and door. Against fires,
                    water damage & more.
                  </p>
                  <Link
                    to={generatePath("/marketplace/:source", {
                      source: "alarms",
                    })}
                  >
                    <i className="fas fa-arrow-circle-right" />
                    <span className="explore">Explore</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Start Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-sun" />
                  <h3 className="title">Solars</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Save time, save fossil fuels, save yourself the hassle of
                    grid outages
                  </p>
                  <Link
                    to={generatePath("/marketplace/:source", {
                      source: "solars",
                    })}
                  >
                    <i className="fas fa-arrow-circle-right" />
                    <span className="explore">Explore</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Start Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award" />
                  <h3 className="title">Fundings</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Our marketplace guarantees to secure the very best funding
                    that you qualify for.
                  </p>
                  <Link
                    to={generatePath("/marketplace/:source", {
                      source: "fundings",
                    })}
                  >
                    <i className="fas fa-arrow-circle-right" />
                    <span className="explore">Explore</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Start Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-list" />
                  <h3 className="title">Financial Plans</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Discover our resources to keep you informed and on track for
                    your long-term goals.
                  </p>
                  <Link
                    to={generatePath("/marketplace/:source", {
                      source: "financial-plans",
                    })}
                  >
                    <i className="fas fa-arrow-circle-right" />
                    <span className="explore">Explore</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}
            {/* Start Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-shield-alt" />
                  <h3 className="title">Insurance</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Easily compare insurance rates from top companies..
                  </p>
                  <Link
                    to={generatePath("/marketplace/:source", {
                      source: "insurance",
                    })}
                  >
                    <i className="fas fa-arrow-circle-right" />
                    <span className="explore">Explore</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketplaceHome;
