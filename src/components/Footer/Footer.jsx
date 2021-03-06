import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Footer.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <>
      <div className="layout">
        <hr />
        <div className="container">
          <div className="footer">
            <div className="footer-layout-1">
              <div className="footer-logo">
                <svg
                  width="148"
                  height="38"
                  viewBox="0 0 148 38"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="xl:h-8 xl:w-[125px]"
                >
                  <path
                    class="logo_inline_svg__cls-1"
                    d="M11.09 14.86V6.57L7.38 4.38V22.8l6.15-2.88.01 4.03-9.81 4.88V2.17L.04 0 0 30.73l3.56 2.39 13.69-6.8-.02-7.84-6.14-3.62zM35.06 16.13a3.21 3.21 0 00-1.42-1 6.33 6.33 0 00-2.07-.3 6.64 6.64 0 00-2.45.61v-3.29l-3-1.59v16.16h4.43a10.47 10.47 0 002.64-.29 3.81 3.81 0 001.75-1 3.91 3.91 0 001-1.83 11.13 11.13 0 00.3-2.81 12.56 12.56 0 00-.35-2.79 4.61 4.61 0 00-.83-1.87zM33 22.22a2.41 2.41 0 01-.41 1 1.62 1.62 0 01-.8.57 4 4 0 01-1.24.17L30 24l-.86-.07v-6.08l.32-.07a6.12 6.12 0 011.72-.23c1.28 0 1.91 1 1.91 3.07a10.28 10.28 0 01-.09 1.6zM41.79 15.1h-3v11.35h3v-7.61l.46-.15c.44-.14.92-.28 1.44-.41s1.09-.27 1.71-.39v-3.06a11.83 11.83 0 00-3.63 1.47zM52.19 14.83a6.3 6.3 0 00-2.45.42 3.94 3.94 0 00-1.62 1.19 4.87 4.87 0 00-.88 1.86 10.21 10.21 0 00-.24 2.45q0 6 5.22 6t5.22-6a7 7 0 00-1.2-4.37 4.77 4.77 0 00-4.05-1.55zm1.68 8.5a1.74 1.74 0 01-1.68.8 2 2 0 01-1.17-.3 2 2 0 01-.64-.8 3.56 3.56 0 01-.27-1.09 11.85 11.85 0 01-.06-1.19 5.35 5.35 0 01.46-2.55 2.18 2.18 0 013.36 0 5.37 5.37 0 01.45 2.55 5.56 5.56 0 01-.45 2.58zM71.17 23.86h-.54l-1.73-8.54h-3.13l-1.73 8.54h-.54l-1.39-8.76h-3l2.16 11.35h4.77l1.29-6.95 1.3 6.95h4.76l2.16-11.35h-2.99l-1.39 8.76zM85.59 20.62a3 3 0 00-1-.67 6.81 6.81 0 00-1.59-.42c-.62-.11-1.12-.2-1.49-.29a5.51 5.51 0 01-.78-.21.64.64 0 01-.46-.62.69.69 0 01.34-.63 3.18 3.18 0 011.46-.21q.57 0 1.53.09c.64.06 1.44.16 2.4.28v-2.52l-.75-.14c-.77-.15-1.46-.26-2.08-.33a13.89 13.89 0 00-1.57-.1 6.1 6.1 0 00-1.76.23 3.84 3.84 0 00-1.39.68 3.25 3.25 0 00-.91 1.13 3.64 3.64 0 00-.33 1.59 4.59 4.59 0 00.26 1.52 2.38 2.38 0 00.65 1 3.05 3.05 0 001.09.64 8.94 8.94 0 001.54.37 13.1 13.1 0 012.18.5.68.68 0 01.41.64.67.67 0 01-.39.63 3.29 3.29 0 01-1.5.23q-.56 0-1.53-.09c-.64-.06-1.44-.15-2.39-.27l-.09 2.54.72.13a19.48 19.48 0 003.64.41q4.56 0 4.56-3.67a5.05 5.05 0 00-.18-1.44 2.36 2.36 0 00-.59-1zM93.35 14.83c-3.34 0-5 2-5 6.1a6.82 6.82 0 001.16 4.43 4.64 4.64 0 003.73 1.36 20 20 0 004.72-.63v-2.25l-.63.07c-1.11.09-2.36.13-3.77.13a2.28 2.28 0 01-1.55-.46 2 2 0 01-.54-1.51h6.67L98.3 20q0-5.17-4.95-5.17zm-2 4.92a3.15 3.15 0 01.46-1.87 1.87 1.87 0 011.53-.56 1.81 1.81 0 011.51.54 3.13 3.13 0 01.42 1.89zM103.84 15.1h-3v11.35h3v-7.61l.46-.15c.44-.14.92-.28 1.44-.41s1.09-.27 1.71-.39v-3.06a11.83 11.83 0 00-3.63 1.47zM109.74 10.56h3.04v15.89h-3.04zM120.53 14.83q-5 0-5 6.1a6.82 6.82 0 001.16 4.43 4.62 4.62 0 003.72 1.36 20 20 0 004.73-.63l-.05-2.25-.64.07c-1.1.09-2.36.13-3.76.13a2.26 2.26 0 01-1.55-.46 2 2 0 01-.54-1.51h6.67l.23-2.11q-.02-5.13-4.97-5.13zm-2 4.92a3.14 3.14 0 01.47-1.87 1.85 1.85 0 011.53-.56 1.81 1.81 0 011.51.54 3.13 3.13 0 01.42 1.89zM135.74 20.62a3 3 0 00-1-.67 6.9 6.9 0 00-1.55-.42c-.62-.11-1.11-.2-1.48-.29a5.37 5.37 0 01-.79-.21.63.63 0 01-.45-.62.68.68 0 01.34-.63 3.1 3.1 0 011.45-.21q.57 0 1.53.09c.65.06 1.45.16 2.4.28v-2.52l-.75-.14c-.78-.15-1.47-.26-2.08-.33a14 14 0 00-1.58-.1 6.15 6.15 0 00-1.76.23 3.72 3.72 0 00-1.38.68 3.14 3.14 0 00-.91 1.13 3.64 3.64 0 00-.33 1.59 4.61 4.61 0 00.21 1.51 2.48 2.48 0 00.65 1 3.14 3.14 0 001.09.64 8.94 8.94 0 001.54.37 12.83 12.83 0 012.18.5.71.71 0 010 1.27 3.35 3.35 0 01-1.5.23q-.57 0-1.53-.09t-2.4-.27l-.09 2.54.73.13a19.39 19.39 0 003.63.41q4.56 0 4.56-3.67a5.05 5.05 0 00-.18-1.44 2.36 2.36 0 00-.55-.99zM147.39 21.61a2.36 2.36 0 00-.59-1 2.92 2.92 0 00-1.05-.67 6.81 6.81 0 00-1.54-.42c-.62-.11-1.12-.2-1.49-.29a5.51 5.51 0 01-.78-.21.63.63 0 01-.45-.62.68.68 0 01.34-.63 3.1 3.1 0 011.45-.21q.57 0 1.53.09c.64.06 1.44.16 2.4.28v-2.52l-.75-.14q-1.16-.22-2.07-.33a14.19 14.19 0 00-1.58-.1 6.1 6.1 0 00-1.76.23 3.84 3.84 0 00-1.39.68 3.25 3.25 0 00-.91 1.13 3.64 3.64 0 00-.32 1.59 4.61 4.61 0 00.21 1.51 2.38 2.38 0 00.65 1 3.14 3.14 0 001.09.64A8.94 8.94 0 00142 22a13.1 13.1 0 012.18.5.68.68 0 01.41.64.67.67 0 01-.39.63 3.27 3.27 0 01-1.49.23c-.38 0-.89 0-1.54-.09s-1.44-.15-2.39-.27l-.09 2.54.72.13a19.48 19.48 0 003.64.41q4.56 0 4.56-3.67a5.05 5.05 0 00-.22-1.44z"
                  ></path>
                </svg>
              </div>
              <div className="footer-logo__icon">
                <div className="footer-logo__icon-github">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="xl:h-7 xl:w-7"
                  >
                    <path d="M16 .15C7.177.15 0 7.412 0 16.34c0 7.522 5.267 14.165 12.523 15.794a.673.673 0 00.561-.132.678.678 0 00.25-.526v-3.67a.67.67 0 00-.667-.674h-1.334c-1.664 0-2.796-1.596-3.796-3.003-.102-.145-.204-.289-.306-.43.473.254.88.56 1.281.861.799.6 1.625 1.219 2.724 1.219h.013c.086.01.864.09 1.467-.445.283-.253.617-.729.617-1.575v-.47a.672.672 0 00-.485-.65c-3.697-1.059-6.181-3.862-6.181-6.974 0-1.62.657-3.164 1.9-4.468a.68.68 0 00.125-.753c-.496-1.082-.39-2.554.197-3.438.779.307 1.788.95 2.444 1.738a.66.66 0 00.739.198c2.5-.928 5.357-.928 7.857 0 .266.097.56.018.739-.198.656-.788 1.665-1.431 2.443-1.739.589.884.694 2.357.197 3.439a.68.68 0 00.125.753c1.243 1.304 1.9 2.849 1.9 4.468 0 3.267-2.76 6.193-6.71 7.115a.667.667 0 00-.456.376.68.68 0 00.017.595c.33.634.483 1.493.483 2.706v5.019c0 .205.092.398.249.526a.662.662 0 00.561.132C26.733 30.504 32 23.862 32 16.34 32 7.412 24.823.15 16 .15z"></path>
                  </svg>
                </div>
                <div className="footer-logo__icon-twitter">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="xl:h-7 xl:w-7"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32.15c8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16s-16 7.164-16 16c0 8.837 7.163 16 16 16zm11.324-21.986a.467.467 0 01.555.098.45.45 0 01.048.552c-.546.854-1.427 1.649-2.016 2.08.319 3.876-1.972 8.208-5.648 10.622-1.364.896-3.604 1.968-6.506 1.968-1.994 0-4.302-.507-6.854-1.924a.456.456 0 01-.213-.542.46.46 0 01.494-.314c1.682.192 3.52-.199 4.893-.996-1.572-.366-2.843-1.375-3.514-2.842a.454.454 0 01.074-.492.468.468 0 01.485-.136c.203.061.404.104.597.127-1.194-.705-2.472-2.054-2.472-4.075a.46.46 0 01.264-.415.47.47 0 01.492.059c.15.119.308.219.472.299a4.88 4.88 0 01-.806-1.667c-.309-1.178-.13-2.37.516-3.448a.468.468 0 01.761-.052c1.366 1.688 3.791 3.726 7.693 4.098-.072-1.22.299-3.223 2.004-4.207 2.097-1.211 4.114-1.055 5.848.447.767-.169 1.98-.69 2.231-.864.16-.11.372-.11.532 0 .16.111.232.308.182.494-.116.432-.378.913-.704 1.342a4.05 4.05 0 00.592-.212z"
                    ></path>
                  </svg>
                </div>
                <div className="footer-logo__icon-slack">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="xl:h-7 xl:w-7"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32.15c8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16s-16 7.164-16 16c0 8.837 7.163 16 16 16zM13.195 5.484h-.003a2.243 2.243 0 000 4.485h2.24V7.722a2.239 2.239 0 00-2.237-2.238zM7.59 21.214a2.243 2.243 0 010-4.486h2.243v2.243a2.243 2.243 0 01-2.243 2.242zm3.36-2.243a2.241 2.241 0 014.482 0v5.605a2.241 2.241 0 01-4.482 0v-5.605zm2.241-3.38H7.576a2.243 2.243 0 010-4.485h5.616a2.243 2.243 0 010 4.485zm11.212-4.486a2.238 2.238 0 00-2.238 2.238v2.247h2.241a2.243 2.243 0 000-4.485h-.003zm-7.836 2.244V7.726a2.241 2.241 0 014.482 0v5.623a2.241 2.241 0 01-4.482 0zm4.48 11.225a2.241 2.241 0 00-2.24-2.24h-2.241v2.242a2.24 2.24 0 004.482-.002zm-2.24-7.846h5.616a2.243 2.243 0 010 4.485h-5.616a2.243 2.243 0 010-4.485z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="footer-layout-2">
              <ul className="footer-layout-2__col-1">
                <li className="footer-layout-2__col-1-item">
                  <Link to="">Scraping / Automation</Link>
                </li>
                <li className="footer-layout-2__col-1-item">
                  <Link to="">PDF / Screenshot / Screencast</Link>
                </li>
                <li className="footer-layout-2__col-1-item">
                  <Link to="">Testing</Link>
                </li>
              </ul>
              <ul className="footer-layout-2__col-2">
                <li className="footer-layout-2__col-2-item">
                  <Link to="">Documentation</Link>
                </li>
                <li className="footer-layout-2__col-2-item">
                  <Link to="">Blog</Link>
                </li>
                <li className="footer-layout-2__col-2-item">
                  <Link to="">Frequently Asked Questions</Link>
                </li>
                <li className="footer-layout-2__col-2-item">
                  <Link to="">Debugger</Link>
                </li>
              </ul>
              <ul className="footer-layout-2__col-3">
                <li className="footer-layout-2__col-3-item">
                  <Link to="">About Us</Link>
                </li>
                <li className="footer-layout-2__col-3-item">
                  <Link to="">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright__left">
              <span>?? 2021 Browserless</span>
            </div>
            <div className="footer-copyright__right">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Clone by Nam Nguyen</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
