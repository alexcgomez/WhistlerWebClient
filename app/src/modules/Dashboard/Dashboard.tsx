import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Img } from 'react-image';
import './Dashboard.scss';
import Logo from '../Logo';

import data from './data';

function Dashboard() {
  const [name] = useState('');
  const [url] = useState('');
  const [whistlerApi] = useState('');
  const [status] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="dash-container">
      <NavBar />

      <div className="dash-body">
        <Logo maxWidth="150px" />

        {/*Sites details*/}
        <ul className="list-unstyled">
          {data.map((site) => (
            <li className="media" key={site.name}>
              <SiteSnapshot snapshotUrl={site.whistlerApi.snapshotUrl} url={site.url} />
              <div className="media-body text-dark">
                <h5 className="mt-0 mb-1">{site.name}</h5>
                Here site CMS and version detected, status and severity.
              </div>
            </li>
          ))}
        </ul>

        <AddSite />
      </div>
    </div>
  );
}

export default Dashboard;

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href={`/dashboard`}>
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            User
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href={`/dashboard`}>
              Personal information
            </a>
            <a className="dropdown-item" href={`/dashboard`}>
              Logout
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href={`/dashboard`}>
              Unregister
            </a>
          </div>
          {/*<a className="nav-link" href={`/dashboard`}>Settings</a>*/}
          <a className="nav-link disabled" href={`/dashboard`} tabIndex={-1} aria-disabled="true">
            Settings
          </a>
        </div>
      </div>
      <button className="btn btn-success my-2 my-sm-0" type="submit">
        Scan
      </button>
    </nav>
  );
}

function SiteSnapshot(props: { snapshotUrl: string; url: string }) {
  return (
    <div className="site-snapshot">
      {/* Multiple fallback images: attempt to load all the images specified in the array'*/}
      <Img src={[props.snapshotUrl, '/image-not-found.png']} alt="" width="128" height="128" />
      <a className="text-secondary" href={props.url}>
        {props.url}
      </a>
    </div>
  );
}

function AddSite() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder=">>> Add your site here and let Whistler notify you when an update is required!"
        aria-label=">>> Add your site here and let Whistler notify you when an update is required!"
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
          Add
        </button>
      </div>
    </div>
  );
}

// TODO: Show loading spinner
/* <React.Suspense fallback='Loading views...'>
      loading?         
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      : null
  </React.Suspense>*/
