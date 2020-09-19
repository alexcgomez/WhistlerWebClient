import React, { FormEvent, useState } from 'react';
import { Img } from 'react-image';
import './Dashboard.scss';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/RootReducer';
import { AddSite } from '../../actions/Sites/AddSiteActions';

function Dashboard() {
  const userSites = useSelector((state: RootState) => state.authentication.authenticatedData?.userSites);

  const dispatch = useDispatch();

  const handleSumbit = (e: FormEvent, siteUrl:string,userId:string)=> {
    e.preventDefault();
    dispatch(AddSite(siteUrl,userId));
  }

  return (<div className="dash-container">
      <div className="dash-container">
        <NavBar/>
        <div className="dash-body">
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Logo maxWidth="150px"/>
            <h5 style={{ padding: '14px 25px', margin: '0px' }}>Here is your sites' update summary.</h5>
          </div>
          {/*Sites details*/}
          <ul className="list-unstyled">
            {userSites.map((site: any) => (
              <li className="media" key={site.name}>
                {/*<SiteSnapshot snapshotUrl={site.snapshotUrl} url={site.url} />*/}
                <div className="site-info card mb-3 bg-light">
                  <SiteSnapshot snapshotUrl={site.snapshotUrl} url={site.url}/>
                  <SiteCard site={site}/>
                </div>
                <div className="site-status">{site.status}</div>
              </li>
            ))}
          </ul>
          <AddSiteButton handleSumbit={handleSumbit}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href={`/`}>
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link dropdown-toggle" href={`/dashboard`} id="navbarDropdown" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            User
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href={`/dashboard`}>
              Personal information
            </a>
            <a className="dropdown-item" href={`/dashboard`}>
              Logout
            </a>
            <div className="dropdown-divider"/>
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
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Scan
      </button>
    </nav>
  );
}

function SiteSnapshot(props: { snapshotUrl: string; url: string }) {
  return (
    <div className="site-snapshot border border-0 border-white">
      {/* Multiple fallback images: attempt to load all the images specified in the array'*/}
      <Img src={[props.snapshotUrl, '/image-not-found.png']} alt="" width="120" height="120"/>
      <a className="text-secondary" href={props.url}>
        {props.url}
      </a>
    </div>
  );
}

function AddSiteButton(props: any) {
  const user = useSelector((state: RootState) => state.authentication.authenticatedData?.user);
  const [siteUrl, setSiteUrl] = useState('');
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder=">>> Add your site here and let Whistler notify you when an update is required!"
        aria-label=">>> Add your site here and let Whistler notify you when an update is required!"
        aria-describedby="button-addon2"
        onChange={(e) => setSiteUrl(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                onClick={(e) => props.handleSumbit(e, siteUrl, user?.id)}>
          Add
        </button>
      </div>
    </div>
  );
}

function SiteCard(props: { site: any }) {
  return (
    <div className="card-details border-left">
      <div className="site-header card-header text-dark ">
        {props.site.name}
        <button className="btn" type="submit">
          <FontAwesomeIcon icon={faTrashAlt} size={'lg'}/>
        </button>
      </div>

      <div className="card-body text-dark">
        <SiteDetails site={props.site}/>
      </div>
    </div>
  );
}

function SiteDetails(props: { site: any }) {
  return (
    <ul className="site-details">
      <li className="card-text" style={{ fontWeight: 'bold' }}>
        {props.site.cms}
      </li>
      <li className="card-text">Current version: {props.site.version}</li>
      <li className="card-text">Last release: {props.site.latestRelease}</li>
      <p className="card-text site-bottom">
        <small className="text-muted">Scanned at: {props.site.scannedAt}</small>
      </p>
    </ul>
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

// TODO: Add condition to show status with icons and colors (red, yellow, green)
// TODO: Update summary based on React state (Sites).
// TODO: Find a better place on top for AddSite element, at least add href link to move down

// --- Future work ---
// Add summary view without snapshots, just a table with all the sites, CMS, versions and status 
// Add option to search the sites in a given server and add them automatically
// Add upgrade details and links
// Add custom settings for default view, scan periodicity...
// Allow setting custom notifications, for every update, once a week... only major or security upgrades



