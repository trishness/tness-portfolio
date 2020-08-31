import React from "react";
import {Link} from "react-router-dom"
import style from "./style.css"
import TNResume from "./TNResume.pdf"

function Nav() {
    return (
        <>
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand"><strong>Trish Ness</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/trishness" target="_blank">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/trish-ness-39593544" target="_blank">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={TNResume} target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;