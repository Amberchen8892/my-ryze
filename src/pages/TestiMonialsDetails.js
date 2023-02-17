import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, description, img, id } = testiMonialDetail;
  return (
    <div className="item">
      <div className="cards-wrapper">
        <div className="testimonial-card">
          <div
            className="text"
            style={{ color: "#0f3460", fontFamily: "Lato,san-serif" }}
          >
            {description}
            <i className="fas fa-quote-right quote"></i>
          </div>
          <div className="footer-card">
            <div className={`image image${id}`}></div>
            <h3 className="person">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
