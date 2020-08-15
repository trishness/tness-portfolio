import React from "react";
import { Link } from "react-router-dom"
import wander from "./wander.jpg"
import restaurant from "./restaurant.jpg"
import budgettracker from "./budgettracker.jpg"
import burger3 from "./burger3.jpg"
import employeedirectory from "./employeedirectory.jpg"
import note3 from "./note3.jpg"
import style from "./style.css"

function Projects() {
    return (
      <>
        <div className="card-deck">
            <div className="card">
      <div className="img-container">
        <img
          alt="Whoops"
          className="img-thumbnail image-fluid rounded mx-auto d-block"
          src={restaurant}
        />
      </div>
      <div className="content">
        <h4><strong>Wine Key</strong></h4>
          <p>
              Built for Fire&Vine Hospitality, a site designed for managers to input wine inventory for specific locations in order to easily manage and trade stock within the company.
          </p>
          <div className="cardBtn">
          <a href="https://fv-winekey.herokuapp.com" class="btn btn-primary">Deployed Site</a>
          <a href="https://github.com/arielbs1991/Wine-Key" class="btn btn-primary">GitHub</a>
          </div>
      </div>
    </div>
    <br></br>
    <div className="card">
        <div className="img-container">
        <img
          alt="Wander"
          className="img-thumbnail image-fluid rounded mx-auto d-block"
          src={wander}
        />
      </div>
      <div className="content">
      <h4><strong>WANDER</strong></h4>
          <p>
            A project that helps a PNW user find a randomized hike for a new outdoor adventure, complete with hike information and pertinent weather conditions.
          </p>
          <div className="cardBtn">
          <a href="https://codysamuels.github.io/wander/" className="btn btn-primary">Deployed Site</a>
          <a href="https://github.com/CodySamuels/wander" className="btn btn-primary">GitHub</a>
          </div>
      </div>
    </div>
    <br></br>
    <div className="card">
        <div className="img-container">
        <img
          alt="Wander"
          className="img-thumbnail image-fluid rounded mx-auto d-block"
          src={employeedirectory}
        />
      </div>
      <div className="content">
      <h4><strong>Employee Directory</strong></h4>
          <p>
            My first project with React, a sample site that displays a company's employee directory. Additional features were included that show sorting and filtering functionality.
          </p>
          <div className="cardBtn">
          <a href="https://radiant-springs-29355.herokuapp.com/" className="btn btn-primary">Deployed Site</a>
          <a href="https://github.com/trishness/employeedirectory" className="btn btn-primary">GitHub</a>
          </div>
      </div>
    </div>
    </div>
    <br></br>
    <div className="card-deck">
    <div className="card">
        <div className="img-container">
        <img
          alt="Wander"
          className="img-thumbnail image-fluid rounded mx-auto d-block"
          src={budgettracker}
        />
      </div>
      <div className="content">
      <h4><strong>Budget Tracker</strong></h4>
          <p>
            A server enabled application that assists a user in tracking their budget. Additional offline/WPA functionality increases the user experience and accessibility.
          </p>
          <div className="cardBtn">
          <a href="https://evening-sea-36595.herokuapp.com/" className="btn btn-primary">Deployed Site</a>
          <a href="https://github.com/trishness/budgettracker" className="btn btn-primary">GitHub</a>
          </div>
      </div>
    </div>
    <br></br>
    <div className="card">
        <div className="img-container">
        <img
          alt="Wander"
          className="img-thumbnail image-fluid rounded mx-auto d-block"
          src={note3}
        />
      </div>
      <div className="content">
      <h4><strong>Note Taker</strong></h4>
          <p>
            One of my first experiences with express servers, this is a site that enables a user to create, edit, delete, and store personal notes and to-do lists for current and future use.
          </p>
          <div className="cardBtn">
          <a href="https://pure-depths-06751.herokuapp.com/" className="btn btn-primary">Deployed Site</a>
          <a href="https://github.com/trishness/notetaker" className="btn btn-primary">GitHub</a>
          </div>
      </div>
    </div>
    <br></br>
    <div className="card">
        <div className="img-container">
        <img
          alt="Wander"
          className="img-thumbnail image-fluid rounded mx-auto d-block"
          src={burger3}
        />
      </div>
      <div className="content">
      <h4><strong>Burger App</strong></h4>
          <p>
            While very basic in functionality, my first experience with dynamically creating functional and editable sites with Handlebars alongside servers and MySQL databases.
          </p>
          <div className="cardBtn">
          <a href="https://fierce-dawn-49625.herokuapp.com/" className="btn btn-primary">Deployed Site</a>
          <a href="https://github.com/trishness/burger" className="btn btn-primary">GitHub</a>
          </div>
      </div>
    </div>
        </div>
        </>
    )
}

export default Projects;