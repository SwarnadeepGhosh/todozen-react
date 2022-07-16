import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" width="30" height="22" className="d-inline-block align-center"/>
            {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Todos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {props.searchBar? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
        </div>
      </div>
    </nav>
  )
}

// Default value will be provided , if no value proided from parent
Header.defaultProps = {
    title : "Your title here",
    searchBar : true
}

// Strict Type checking, this will throw error in console if String not received as title
Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
}
