import React from "react";
import PropTypes from "prop-types";
import "./Main.scss";
import { Link } from "react-router-dom";

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
                    <img src="" alt="" />
                  </div>
                  <h1 className="selection-2-list-note__list-item__title">
                    Works with popular libraries
                  </h1>
                  <p>
                    Integrate with one-line of code in Puppeteer and Playwright.
                  </p>
                </li>
                <li className="selection-2-list-note__list-item">
                  Hosted accounts get access to dashboards, monitoring, and
                  more.
                </li>
                <li className="selection-2-list-note__list-item">
                  Can be self hosted in your cloud or on-site
                </li>
                <li className="selection-2-list-note__list-item">
                  No need to install extra packages or dependencies.
                </li>
                <li className="selection-2-list-note__list-item">
                  Scale up or down your account at any time.
                </li>
                <li className="selection-2-list-note__list-item">
                  Get going in minutes with powerful use-case specific REST
                  APIs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
