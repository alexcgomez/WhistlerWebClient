import React, { useState } from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Img from "react-image";


import data from './data';

function Dashboard() {
  return (
    <div className="dash-container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href={`/dashboard`}>Home <span className="sr-only">(current)</span></a>
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href={`/dashboard`}>Personal information</a>
              <a className="dropdown-item" href={`/dashboard`}>Logout</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href={`/dashboard`}>Unregister</a>
            </div>
            {/*<a className="nav-link" href={`/dashboard`}>Settings</a>*/}
            <a className="nav-link disabled" href={`/dashboard`} tabIndex={-1} aria-disabled="true">Settings</a>
          </div>
        </div>
        <button className="btn btn-success my-2 my-sm-0" type="submit">Scan</button>
      </nav>

      <div className="dash-body">
        <img src="logo.svg" alt={"Whistler-logo"} />

        <ul className="list-unstyled">
          <li className="media">
            <img src="https://i.pinimg.com/originals/7f/f6/82/7ff682ca54c549258bddca9ebc9761b4.jpg" className="mr-3" alt="" width="128" height="128"/>
            {/* Multiple fallback images: attempt to load all the images specified in the array'*/}
            {/* <Img src={["https://i.pinimg.com/originals/7f/f6/82/7ff682ca54c549258bddca9ebc9761b4.jpg", "/image-not-found.png"]} alt="" width="40" height="40" /> */}

            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
          <li className="media">
          <img src="https://i.pinimg.com/originals/7f/f6/82/7ff682ca54c549258bddca9ebc9761b4.jpg" className="mr-3" alt="" width="128" height="128"/>
            <div className="media-body">
              <h5 className="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
