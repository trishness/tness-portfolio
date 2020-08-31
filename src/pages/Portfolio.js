import React from "react";
import { Col, Row, Container } from "../components/Grid"
import Projects from "../components/Card/index"
// import WineKey from "../components/Card/WineKey"

const Portfolio = () => {
    return (
        <>
        <div className="container-fluid h1 center">
      <div className="row">
        <div className="col-md-12 sm-12 justify-content-center">
          <h1 id="portfolio" className="center rounded">Portfolio</h1>
        </div>
            </div>
        </div>
        <div className="container-fluid cards center justify-content-center">
            <div className="row">
                <div className="col-md-12 sm-12 cards center justify-content-center">
                    <Projects className="cards center"></Projects>
                </div>
            </div>
        </div>
        </>
    )
}

export default Portfolio;