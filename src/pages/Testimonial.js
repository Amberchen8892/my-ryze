import React, { useEffect, useState } from "react";
import TestiMonialsDetails from "./TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestiMonial = () => {
  const testiMonials = [
    {
      id: 1,
      name: "Rekob R.",
      description:
        " I am impressed! For signing up with RYZE, I can acccess my credit score report anytime and get new update once a month.",
    },
    {
      id: 2,
      name: "Brandon S.",
      description:
        "I am using Identity Protection. With RYZE I fell more secure with the knowledge that someone other than myself is looking over me",
    },
    {
      id: 3,
      name: "Steve B.",
      description:
        "Wish I’d set this up sooner. Need this on top of all the physical security stuff I have going on.",
    },
    {
      id: 4,
      name: "Kevin C.",
      description:
        "I am impressed with the features that they offer and the quality of their service for a low price. I would suggest it to all my friends",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 } },
  };
  return (
    <div
      id="testimonial"
      className="testimonials"
      style={{ width: "100%", paddingTop: "4.5em", paddingBottom: "3em" }}
    >
      <h1
        className="section-three-title"
        data-aos="fade-left"
        style={{ color: "#12ae6d" }}
      >
        {" "}
        What others are saying?{" "}
      </h1>
      <div className="container" style={{ width: "100%", paddingTop: "2em" }}>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-sm-12"
            data-aos="flip-up"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.map((testiMonialDetail) => {
                return (
                  <TestiMonialsDetails
                    testiMonialDetail={testiMonialDetail}
                    key={testiMonialDetail._key}
                  />
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiMonial;
