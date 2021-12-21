import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import background from "../Images/background.png";
import "./Background.scss";

Background.propTypes = {};

function Background(props) {
  return (
    <>
      <div className="layout">
        <div className="container">
          <div className="background">
            <div className="backgorund-text">
              <h1 className="background-text-primary">
                Web browser automation built for everyone, and loved by
                developers
              </h1>
            </div>
            <div className="btn-background">
              <Link to="" className="btn-background__btn-secondary">
                Try it Free
              </Link>
            </div>
            <div className="background-animation">
              <div className="background-animation__image">
                <img className="background-animation__image-source" src={background} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
