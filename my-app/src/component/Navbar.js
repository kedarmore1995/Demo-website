import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom"




export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    {props.aboutText}
                                </Link>
                            </li>

                        </ul>
                        <div className={` ms-auto mx-3 mb-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Change theme

                            <input className="form-check-input mx-2" onClick={props.handleThemeGreen} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" style={{ backgroundColor: "green", cursor: 'pointer' }} />
                            <input className="form-check-input mx-2" onClick={props.handleThemeYellow} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" style={{ backgroundColor: "yellow", cursor: 'pointer' }} />
                            <input className="form-check-input mx-2" onClick={props.handleThemeRed} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" style={{ backgroundColor: "red", cursor: 'pointer' }} />


                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnTxt}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title : "Set title here",
//     aboutText : "Set About here"
// };