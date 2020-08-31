import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Carousel from "../components/Carousel"
import "./style.css"
import trishboat from "../components/Carousel/trishboat.jpg";
import trish1 from "../components/Carousel/trish1.jpg";
import trish3 from "../components/Carousel/trish3.jpg";
import "./About.css"

const About = () => {
  return (
    < div className="container-fluid">
      <div className=" h1 center">
        <div className="row">
          <div className="col-md-12 sm-12 justify-content-center">
            <h1 className="center rounded">Hi, I'm Trish.</h1>
          </div>
        </div>
      </div>
      <div className="row images">
      <img className="img rounded" src={trishboat} alt="whoops" />
      <img className="img rounded" src={trish1} alt="whoops" />
      <img className="img rounded" src={trish3} alt="whoops" />
      </div>
      <div className=" background rounded about">

        <div className="row">
          <div className="col-md-12 sm-12 bg justify-content-center">
            <p className="center background rounded">I am a certified fullstack web developer with an inclination towards front-end development. Post graduation from the University of Washington, I entered into various roles including management and office administration. This versatile professional history has embedded strong beliefs in teamwork, critical thinking, and attention to detail within my core. I am an extremely motivated person that strives to not only achieve, but exceed expectations for every set goal. My genial yet professional disposition has been highly regarded by both clients and coworkers, enabling rapid professional growth and solidifying essential connections in each workplace. Combined with my ability to learn quickly, I have proven to be an asset to each company I have been a part of.
          <br />
              <br />
           Born and raised in Seattle, I have witnessed this industry bloom in one of the country's tech meccas over the past 20 years. I am excited to play my own role within this exciting, ever-changing and growing world!
          <br />
              <br />
              <br />
              <strong>Technical Skills</strong>
              <br />
              <br />
          HTML5
          <br />
          CSS3
          <br />
          JavaScript
          <br />
          ReactJS
          <br />
          JSX
          <br />
          Node
          <br />
          JQuery
          <br />
           Express
          <br />
           MySQL/Sequelize
          <br />
           MongoDB/Mongoose
          <br />
          Axios
          <br />
          Handlebars
          <br />
          Bootstrap
          <br />
          Foundation
          <br />
          Materialize
          <br />
          AntD
          <br /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;