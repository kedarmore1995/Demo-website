import PropTypes from 'prop-types';
import React from 'react';



export default function Navbar(props) {


    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand mx-2" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                {props.aboutText}
                            </a>
                        </li>
                    </ul>
                    <div className={` ms-auto mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Change theme

                        <input className="form-check-input mx-2" onClick={props.handleThemeGreen} type="radio" value="option1" style={{ backgroundColor: "green" }} />
                        <input className="form-check-input mx-2" onClick={props.handleThemeYellow} type="radio" value="option2" style={{ backgroundColor: "yellow" }} />
                        <input className="form-check-input mx-2" onClick={props.handleThemeRed} type="radio" value="option3" style={{ backgroundColor: "red" }} />


                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? " light" : "dark"} mode</label>
                    </div>
                    {/* <form className="d-flex ms-auto px-2" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-info" type="submit">
                            Search
                        </button>
                    </form> */}
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