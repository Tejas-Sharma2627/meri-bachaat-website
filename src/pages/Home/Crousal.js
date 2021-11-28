import React from "react";
import img1 from "./images/c1.png";
import img2 from "./images/c2.png";
import img3 from "./images/c3.png";
function Crousal() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" >
          <div className="carousel-item active" style={{ zIndex: "1" }} >
            <img className="d-block w-100" src={img1} alt="First slide" style={{height:"100%"}} />
          </div>
          <div className="carousel-item" style={{ zIndex: "100" }}>
            <img className="d-block w-100" src={img3} alt="Second slide" style={{height:"100%"}} data-interval="1000" data-keyboard="true"/>
          </div>
          <div className="carousel-item" style={{ zIndex: "100" }}>
            <img className="d-block w-100" src={img2} alt="Third slide" style={{height:"100%"}} data-interval="1000" data-keyboard="true" />
          </div>
        </div>
        <div style={{zIndex:"150"}}>
  
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            style={{zIndex:"150"}}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            style={{zIndex:"150"}}
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Crousal;
