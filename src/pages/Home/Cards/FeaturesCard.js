import React from "react";
import "./Card.css";

function FeaturesCard({ img, title }) {
  return (
    <div className="col-lg-4 py-4">
      <div className="card shadow-lg" style={{ width: "20rem", minHeight:"350px"}}>
        <div className="row">
          <div className="col-lg-6">
            <img className="card-img-top" src={img} alt="Card image cap" />
          </div>
          <div className="col-lg-6"></div>
        </div>

        <div style={{padding:"1.25rem"}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ fontWeight: "lighter" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
