import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Carousel from "../components/Carousel"
import style from "./style.css"
import trish from "../components/Carousel/trish.jpg";
import trish1 from "../components/Carousel/trish1.jpg";
import trish3 from "../components/Carousel/trish3.jpg";

const About = () => {
  return (
      <>
      <h1>trish</h1>
    <div className="container-fluid h1 center">
      <div className="row">
        <div className="col-md-12 sm-12 justify-content-center">
          <h1 className="center rounded">Hi, I'm Trish.</h1>
        </div>
        </div>
    </div>
    <span className="border"><img className="img rounded rounded-bottom" src={trish1} alt="whoops"/></span>
    <div className="container-fluid background">
        
      <div className="row">
        <div className="col-md-6 sm-12 bg">
          <p className="center background rounded">I am a full stack developer with a background in management and office administration. This versatile history has embedded strong beliefs in teamwork, critical thinking and attention to detail within me.
          <br/>
          <br/>
           Born and raised in Seattle, I have witnessed this industry bloom in one of the country's tech meccas over the past 20 years. I am excited to play my own role within this exciting, ever-changing and growing world!
          <br/>
          <br/>
          <br/>
           <strong>Technical Skills</strong>
          <br/>
          <br/>
           HTML/CSS/Dynamic Generation
          <br/>
           JacaScript/jQuery
          <br/>
           ReactJS/JSX
          <br/>
           Node
          <br/>
           Express Servers
          <br/>
           MySQL/Sequenlize
          <br/>
           Mongo/Mongoose</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;