import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generatePath } from "react-router";
import Ryze from "../images/new-logo-ryze.png";
import "../App.css";

export default function NavBar() {
  const [navClassName, setNavClassName] = useState("navbar-container");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 60) {
      return setNavClassName("navbar-container");
    } else if (window.scrollY > 61) {
      return setNavClassName("navbar-container-scroll");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <div id="content-desktop">
        <div className={navClassName}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <div className="container-fluid">
              <Link to="/">
                <img src={Ryze} width="30%" height="30%" alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "white !important" }}
                    >
                      Features
                    </a>

                    <ul class="dropdown-menu">
                      <li>
                        <Link to="/identity-protection">
                          <a class="dropdown-item" href="#">
                            Identity Protection
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/credit-mornitoring">
                          <a class="dropdown-item" href="#">
                            Credit Mornitoring
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "white !important" }}
                    >
                      Sign up
                    </a>

                    <ul class="dropdown-menu">
                      <li>
                        <a
                          type="button"
                          href="https://join.cyrus.app/signup?pcode=MYRYZE"
                          class="dropdown-item"
                        >
                          Identity Protection
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          type="button"
                          href="https://app.myryze.com/customer_login.asp"
                        >
                          Credit Mornitoring
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item" style={{ marginLeft: "10px" }}>
                    <a
                      type="button"
                      href="https://app.myryze.com/customer_login.asp"
                      className="btn btn-light btn-two"
                      style={{ width: "150px" }}
                    >
                      Member Login
                    </a>
                  </li>

                  {/* <li className="nav-item">
                    <a role="button" href="https://app.myryze.com/redirect.asp?GUID=BTW1135HKQ8Y" className="btn btn-outline-light sign-up-button" style={{ width: '150px' }}>
                      <span>Sign Up</span>{' '}
                    </a>
                  </li>
                  <li className="nav-item" style={{ marginLeft: '10px' }}>
                    <a type="button" href="https://app.myryze.com/customer_login.asp" className="btn btn-light btn-two" style={{ width: '150px' }}>
                      Member Login
                    </a>
                  </li> */}
                  <li className="nav-item" style={{ marginLeft: "10px" }}>
                    <a
                      type="button"
                      href="/marketplace"
                      className="btn btn-light btn-two"
                      style={{
                        width: "150px",
                        backgroundColor: "#12ae6e",
                        borderColor: "#12ae6e",
                      }}
                    >
                      Marketplace
                    </a>
                  </li>
                  {/* <li className="nav-item" style={{ marginLeft: '10px' }}>
                    <div className="sec-center">
                      <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                      <label className="for-dropdown" htmlFor="dropdown">
                        Marketplace <i className="uil fa fa-arrow-down"></i>
                      </label>
                      <div className="section-dropdown">
                        <Link className="a" to={generatePath('/marketplace/:source', { source: 'alarms' })}>
                          Alarms <i className="uil fas fa-bell" />
                        </Link>
                        <Link className="a" to={generatePath('/marketplace/:source', { source: 'solars' })}>
                          Solars <i className="uil fas fa-sun" />
                        </Link>
                        <Link className="a" to={generatePath('/marketplace/:source', { source: 'financial-plans' })}>
                          Financial Plans <i className="uil fas fa-list" />
                        </Link>
                        <Link className="a" to={generatePath('/marketplace/:source', { source: 'funding' })}>
                          Funding <i className="uil	far fa-money-bill-alt" />
                        </Link>
                        <Link className="a" to={generatePath('/marketplace/:source', { source: 'insurance' })}>
                          Insurance <i className="uil	fas fa-shield-alt" />
                        </Link>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        id="content-mobile"
        className="nav-mobile"
        style={{ backgroundColor: "yellow" }}
      >
        <div className={navClassName}>
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                  width: "100 %",
                  height: "80px",
                }}
              >
                <Link to="/">
                  <img src={Ryze} width="100%" height="100%" alt="logo" />
                </Link>
              </div>
              <div
                className="col-7"
                style={{
                  width: "100 %",
                  height: "80px",
                  //textAlign: 'right',
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <div className="dropdown-mobile">
                    <button className="dropbtn-mobile signup-mobile">
                      Signup/Login
                    </button>
                    <div className="dropdown-content-mobile">
                      <a href="https://app.myryze.com/customer_login.asp">
                        Log In
                      </a>
                      <a href="https://app.myryze.com/redirect.asp?GUID=BTW1135HKQ8Y">
                        Sign Up
                      </a>
                    </div>
                  </div>
                  {/* <div className="dropdown-mobile">
                    <a type="button" href="/marketplace" className="btn marketplace-mobile" style={{ marginLeft: '5px', width: '100px', backgroundColor: '#12ae6e', borderColor: '#12ae6e', fontSize: '12px' }}>
                      Marketplace
                    </a>
                  </div> */}
                  <div
                    className="dropdown-mobile"
                    style={{ marginLeft: "1em" }}
                  >
                    <a
                      type="button"
                      href="/marketplace"
                      className="dropbtn-mobile"
                      style={{
                        color: "white !important",
                        backgroundColor: "#12ae6e",
                        borderColor: "#12ae6e",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Marketplace
                    </a>
                    {/* <button className="dropbtn-mobile marketplace-mobile">Marketplace</button> */}
                    {/* <div className="dropdown-content-mobile">
                      <Link to={generatePath('/marketplace/:source', { source: 'alarms' })}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div className="marketplace-type">Alarms</div>
                          <div>
                            {' '}
                            <i className="uil fas fa-bell" />
                          </div>
                        </div>
                      </Link>
                      <Link to={generatePath('/marketplace/:source', { source: 'solars' })}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div className="marketplace-type">Solars</div>
                          <div>
                            {' '}
                            <i className="uil fas fa-sun" />
                          </div>
                        </div>
                      </Link>
                      <Link to={generatePath('/marketplace/:source', { source: 'financial-plans' })}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div className="marketplace-type"> Financial Plans</div>
                          <div>
                            <i className="uil fas fa-list" />
                          </div>
                        </div>
                      </Link>
                      <Link to={generatePath('/marketplace/:source', { source: 'funding' })}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div className="marketplace-type">Funding</div>
                          <div>
                            <i className="uil	far fa-money-bill-alt" />
                          </div>
                        </div>
                      </Link>
                      <Link to={generatePath('/marketplace/:source', { source: 'insurance' })}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div className="marketplace-type">Insurance</div>
                          <div>
                            {' '}
                            <i className="uil	fas fa-shield-alt" />
                          </div>
                        </div>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
