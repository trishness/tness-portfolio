import React from "react";
// import { Link } from "react-router-dom"
import style from "./style.css"
import trish from "./trish.jpg"
import trish1 from "./trish1.jpg"
import trish3 from "./trish3.jpg"

function Carousel() {
    return (
    <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={trish} className="d-block w-100 img" alt="Oops"/>
            </div>
            <div className="carousel-item">
                <img src={trish1} className="d-block w-100" alt="Oops"/>
            </div>
            <div className="carousel-item">
                <img src={trish3} className="d-block w-100" alt="Oops"/>
            </div>
        </div>
    </div>
    )
}

export default Carousel;