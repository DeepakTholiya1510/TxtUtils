import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
/* eslint-enable no-unused-vars */



export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.sBtn} bg-${props.sBtn}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="myclass" href="#">Home</a>
              </li>
              {/* <li className="nav-item me-2">
                <a className="myclass" href="/about">{props.About}</a>
              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.sBtn === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.Toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string,
  sBtn: PropTypes.string,
  Toggle: PropTypes.func,
};
