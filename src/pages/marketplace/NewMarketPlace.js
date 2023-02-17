import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { generatePath } from "react-router";
import "../marketplace/style.css";
import marketplacePartner from "../../data/marketplacePartner";

function GetCategoryButton({ source }) {
  const categories = marketplacePartner.filter((obj) => obj.type !== source);
  return categories.map((el, i) => (
    <Link to={generatePath("/marketplace/:source", { source: `${el.type}` })}>
      <button id={`button-${i + 1}`} className="category-button">
        <span>{el.type}</span>
      </button>
    </Link>
  ));
}
function NewMarketplace() {
  const { source } = useParams();
  const data = marketplacePartner.filter((obj) => obj.type === source);
  const date = new Date();
  const today = date.toDateString();
  return (
    <>
      <div className="marketplace-hero-section">
        <div className="container">
          <div className="row hero-section-container">
            <div className="col-lg-12 col-xl-7 hero-text">
              <div>
                <h1 className="card-title hero-title">
                  {data[0].cardTitle} {data[0].subTitle}
                </h1>
                <div className="hero-sub-text">{data[0].text}</div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-5 marketplace-img">
              <img src={data[0].img} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-services"
        style={{
          backgroundColor: "#16213e",
          color: "white",
          paddingTop: "80px",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">
                  Exclusive <span>Marketplace</span>
                </h2>
                <p className="description">
                  The highest quality data for fast, reliable decisioning
                </p>
              </div>
            </div>
          </div>
          <div classname="offer-container">
            <section className="light">
              <div className="container py-2">
                {data[0].partners.length > 0 ? (
                  data[0].partners.map((partner) => (
                    <article className="postcard light blue">
                      <a className="postcard__img_link" href="#">
                        <img
                          className="postcard__img"
                          src={partner.image}
                          alt="Image Title"
                        />
                      </a>
                      <div className="postcard__text t-dark">
                        <h1
                          className="postcard__title blue"
                          stule={{ marginLeft: "5px" }}
                        >
                          <a href="#">{partner.name}</a>
                        </h1>
                        <div className="postcard__subtitle small">
                          <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2" />
                            <span style={{ marginLeft: "7px" }}>{today}</span>
                          </time>
                        </div>
                        <div className="postcard__bar" />
                        <div className="postcard__preview-txt">
                          {partner.description}
                        </div>
                        <ul className="postcard__tagbox">
                          <li className="tag__item">
                            <i className="fas fa-tag mr-2" />
                            Promoted
                          </li>
                          <li className="tag__item play blue">
                            <a href={partner.url} target="_blank">
                              <i className="fas fa-play mr-2" />
                              Visit Site
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  ))
                ) : (
                  <article className="postcard light green">
                    <a className="postcard__img_link" href="#">
                      <img
                        className="postcard__img"
                        src="/img/19219.jpg"
                        alt="Image Title"
                      />
                    </a>
                    <div className="postcard__text t-dark">
                      <h1 className="postcard__title green">
                        <a href="#">Comming Soon</a>
                      </h1>
                      <div className="postcard__subtitle small">
                        <time dateTime="2020-05-25 12:00:00">
                          <i className="fas fa-calendar-alt mr-2" />
                          <span style={{ marginLeft: "3px" }}>{today}</span>
                        </time>
                      </div>
                      <div className="postcard__bar" />
                      <div className="postcard__preview-txt">
                        We are working with our partners.
                      </div>
                      <ul className="postcard__tagbox">
                        <li className="tag__item">
                          <i className="fas fa-tag mr-2" />
                          In Process
                        </li>
                      </ul>
                    </div>
                  </article>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="header-section">
          <h2 className="title" style={{ textAlign: 'center' }}>
            Other <span>Categories</span>
          </h2>
        </div>
      </div> */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GetCategoryButton source={source} />
      </div>
    </>
  );
}

export default NewMarketplace;
