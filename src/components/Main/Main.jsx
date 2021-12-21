import React from "react";
import PropTypes from "prop-types";
import "./Main.scss";
import { Link } from "react-router-dom";
import svg1 from "../Images/svg1.png";
import svg2 from "../Images/svg2.png";
import svg3 from "../Images/svg3.png";
import svg4 from "../Images/svg4.png";
import svg5 from "../Images/svg5.png";
import svg6 from "../Images/svg6.png";
import code from "../Images/code.png";
import background2 from "../Images/background-2.png";

Main.propTypes = {};

function Main(props) {
  return (
    <>
      <div className="layout bg-white">
        <div className="container">
          <div className="selection-1">
            <div className="text-primary">
              <h1 className="text-primary__text">
                Fast, scalable, and reliable web browser automation. Make web
                automation your competitive advantage, not a liability.
              </h1>
            </div>
            <div className="list-note">
              <ul className="list-note__list">
                <li className="list-note__list-item">
                  Works seamlessly with Puppeteer, Playwright, and Selenium
                </li>
                <li className="list-note__list-item">
                  Hosted accounts get access to dashboards, monitoring, and
                  more.
                </li>
                <li className="list-note__list-item">
                  Can be self hosted in your cloud or on-site
                </li>
                <li className="list-note__list-item">
                  No need to install extra packages or dependencies.
                </li>
                <li className="list-note__list-item">
                  Scale up or down your account at any time.
                </li>
                <li className="list-note__list-item">
                  Get going in minutes with powerful use-case specific REST
                  APIs.
                </li>
              </ul>
              <ul className="list-note__box">
                <li className="list-note__box-item">
                  <Link className="list-note__box-item__link" to="">
                    <div className="list-note__box-item__image">
                      <img
                        className="box-item-image"
                        src="https://www.browserless.io/static/card-item-1-illustration-e1a7a7082179fc4f1c55fd5f0eed97bb.svg"
                        alt=""
                      />
                    </div>
                    <h1 className="box-item__title">Data Collection</h1>
                    <span className="box-item-link">Learn more &#10230;</span>
                  </Link>
                </li>
                <li className="list-note__box-item">
                  <Link className="list-note__box-item__link" to="">
                    <div className="list-note__box-item__image">
                      <img
                        className="box-item-image"
                        src="https://www.browserless.io/static/card-item-2-illustration-e8635e9d20906c258f72adef601f7c2e.svg"
                        alt=""
                      />
                    </div>
                    <h1 className="box-item__title">PDF Generation</h1>
                    <span className="box-item-link">Learn more &#10230;</span>
                  </Link>
                </li>
                <li className="list-note__box-item">
                  <Link className="list-note__box-item__link" to="">
                    <div className="list-note__box-item__image">
                      <img
                        className="box-item-image"
                        src="https://www.browserless.io/static/card-item-3-illustration-64786d53fed7ece4badf47a0e078b009.svg"
                        alt=""
                      />
                    </div>
                    <h1 className="box-item__title">QA Testing</h1>
                    <span className="box-item-link">Learn more &#10230;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="layout">
        <div className="container">
          <div className="selection-2">
            <div className="selection-2__header">
              <h1 className="selection-2__header-title">Our Advantages</h1>
              <p className="selection-2__header-desc">
                On top of all that, we takes care of other common issues such as
                missing system-fonts, missing external libraries, and
                performance improvements. We even handle edge-cases like
                downloading files, managing sessions, and have a fully-fledged
                documentation site.
              </p>
              <ul className="selection-2-list-note__list">
                <li className="selection-2-list-note__list-item">
                  <div className="selection-2-list-note__list-item__image">
                    <img src={svg1} alt="" />
                  </div>
                  <h1 className="selection-2-list-note__list-item__title">
                    Works with popular libraries
                  </h1>
                  <p>
                    Integrate with one-line of code in Puppeteer and Playwright.
                  </p>
                </li>
                <li className="selection-2-list-note__list-item">
                  <div className="selection-2-list-note__list-item__image">
                    <img src={svg2} alt="" />
                  </div>
                  <h1 className="selection-2-list-note__list-item__title">
                    Turn up the speed
                  </h1>
                  <p>
                    Increase your app's performance by not having to manage
                    Chrome or other browsers. No more seconds-long start times!
                  </p>
                </li>
                <li className="selection-2-list-note__list-item">
                  <div className="selection-2-list-note__list-item__image">
                    <img src={svg3} alt="" />
                  </div>
                  <h1 className="selection-2-list-note__list-item__title">
                    Powerful REST API
                  </h1>
                  <p>
                    Don't feel like writing code to do screenshots? Use our REST
                    APIs to do the heavy lifting.
                  </p>
                </li>
                <li className="selection-2-list-note__list-item">
                  <div className="selection-2-list-note__list-item__image">
                    <img src={svg4} alt="" />
                  </div>
                  <h1 className="selection-2-list-note__list-item__title">
                    No time restrictions
                  </h1>
                  <p>
                    Sessions can run as long as you want, and even keep the
                    browser open.
                  </p>
                </li>
                <li className="selection-2-list-note__list-item">
                  <div className="selection-2-list-note__list-item__image">
                    <img src={svg5} alt="" />
                  </div>
                  <h1 className="selection-2-list-note__list-item__title">
                    Notifications and metrics
                  </h1>
                  <p>
                    Your account page shows crucial information like sessions
                    and queues.
                  </p>
                </li>
                <li className="selection-2-list-note__list-item">
                  <div className="selection-2-list-note__list-item__image">
                    <img src={svg6} alt="" />
                  </div>
                  <h1 className="selection-2-list-note__list-item__title">
                    No software to install
                  </h1>
                  <p>
                    Stop trying to get Chrome running in lambda, or fonts
                    rendering properly.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="layout">
        <div className="container">
          <div className="selection-3">
            <div className="selection-3-list-note__column">
              <div className="selection-3-list-note__column-item w45">
                <h1 className="selection-3-list-note__column-item__title">
                  Works with popular libraries
                </h1>
                <ul className="selection-3-list-note__column-item__list">
                  <li className="selection-3-list-note__column-item__list-item">
                    <Link
                      to=""
                      className="selection-3-list-note__column-item__link"
                    >
                      Puppeteer Connect
                    </Link>
                    <p className="selection-3-list-note__column-item__content">
                      If you're using puppeteer's launch method, simply change
                      it to connect and specify it to use browserless.
                    </p>
                  </li>
                  <li className="selection-3-list-note__column-item__list-item">
                    <Link
                      to=""
                      className="selection-3-list-note__column-item__link"
                    >
                      Playwright
                    </Link>
                    <p className="selection-3-list-note__column-item__content">
                      If you're using playwright's launch method, simply change
                      it to connect and specify it to use browserless.
                    </p>
                  </li>
                  <li className="selection-3-list-note__column-item__list-item">
                    <Link
                      to=""
                      className="selection-3-list-note__column-item__link"
                    >
                      REST APIs
                    </Link>
                    <p className="selection-3-list-note__column-item__content">
                      Not running Node? Simply use a REST API
                    </p>
                  </li>
                  <li className="selection-3-list-note__column-item__list-item">
                    <Link
                      to=""
                      className="selection-3-list-note__column-item__link"
                    >
                      Selenium
                    </Link>
                    <p className="selection-3-list-note__column-item__content">
                      Specify browserless.io as your server in one line
                    </p>
                  </li>
                </ul>
              </div>
              <div className="selection-3-list-note__column-item">
                <img src={code} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout bg-primary">
        <div className="container">
          <div className="selection-4">
            <div className="selection-4-list-note__column">
              <div className="selection-4-list-note__column-item">
                <img src={background2} alt="" />
              </div>
              <div className="selection-4-list-note__column-item">
                <h1 className="selection-4-list-note__column-item__title">
                  How it works
                </h1>
                <p>
                  Browserless is a web-service that allows for remote programs
                  to connect, pilot, and execute headless browser tasks — all
                  inside of docker. It offers first-class integrations for
                  puppeteer, playwright, selenium's webdriver, and a slew of
                  handy REST APIs as well.
                </p>
                <p>
                  On top of all that it takes care of other common issues such
                  as missing system-fonts, missing external libraries, and
                  performance improvements. We even handle edge-cases like
                  downloading files, managing sessions, and have a fully-fledged
                  documentation site.
                </p>
                <p>
                  If you've been struggling to get Chrome up and running docker,
                  or scaling out your headless workloads, then browserless was
                  built for you.
                </p>
                <Link to="">Check our documentation &#10230;</Link>
              </div>
            </div>
          </div>
          <div className="selection-5">
            <div className="selection-5-content">
              <h1 className="selection-5-text__header">
                Thousands of companies big and small trust browserless.io
              </h1>
              <div className="selection-5-image">
                <div className="selection-5-logo">
                  <img
                    src="https://browserless.dreamhosters.com/wp-content/uploads/2021/10/microsoft.svg"
                    alt=""
                  />
                </div>{" "}
                <div className="selection-5-logo">
                  <img
                    src="https://browserless.dreamhosters.com/wp-content/uploads/2021/10/heroku.svg"
                    alt=""
                  />
                </div>{" "}
                <div className="selection-5-logo">
                  <img
                    src="https://browserless.dreamhosters.com/wp-content/uploads/2021/10/webflow.svg"
                    alt=""
                  />
                </div>{" "}
                <div className="selection-5-logo">
                  <img
                    src="https://browserless.dreamhosters.com/wp-content/uploads/2021/10/woorank.svg"
                    alt=""
                  />
                </div>{" "}
                <div className="selection-5-logo">
                  <img
                    src="https://browserless.dreamhosters.com/wp-content/uploads/2021/11/samsara.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="selection-5-svg">
                <svg
                  width="64"
                  height="44"
                  viewBox="0 0 64 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto mt-16 md:mt-14"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.064 21.429h14.321V44H.01V21.429C-.196 14.286 3.018 0 17.509 0h2.339v9.223h-1.656c-2.043.084-6.128 2.643-6.128 12.206zm37.615 0h14.322V44H37.624V21.429C37.42 14.286 40.634 0 55.124 0h2.339v9.223h-1.656c-2.043.084-6.128 2.643-6.128 12.206z"
                    fill="url(#quote_inline_svg__paint0_linear)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="quote_inline_svg__paint0_linear"
                      x1="64.001"
                      y1="44"
                      x2="37.737"
                      y2="-16.407"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF1A8C"></stop>
                      <stop offset="1" stop-color="#fff"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="selection-5-quote">
                <p className="selection-5-quote__content">
                  Browserless is a great browser-as-a-service tool that just
                  works. We use it as a micro-service that renders thousands of
                  dashboards per day as image of PDF and are very happy with the
                  stability and performance.  
                </p>
                <cite>
                  Ian Formanek — CEO, <Link to="">Cluvio</Link>
                </cite>
              </div>
              <div className="selection-5__btn">
                <Link className="selection-5__btn-up" to="">
                <img src="https://img.icons8.com/ios-filled/18/000000/long-arrow-left.png" alt=""/>
                </Link>
                <Link className="selection-5__btn-down" to="">
                <img src="https://img.icons8.com/ios-filled/18/000000/long-arrow-right.png" alt=""/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout">
        <div className="container">
          <div className="selection-6">
            <div className="selection-6-title">
              <h1 className="selection-6-title__header">
              Ready to try benefits of Browserless?
              </h1>
              <Link className="selection-6-link" to="">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
