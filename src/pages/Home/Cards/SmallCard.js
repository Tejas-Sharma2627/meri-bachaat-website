import React from "react";
import "./Card.css";
function SmallCard({ title, text, img }) {
  return (
    <div className="col-lg-3 py-6">
      <div className="card baseBlock shadow-lg" style={{ width: "15rem",minHeight:"270px", padding:"-1 0 15px 0px" }}>

        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <div className="float float-left">
          <h5 className="card-title">{title}</h5>
            <p
              className="card-text "
              style={{ fontWeight: "lighter" }}
            >
              {text}
            </p>
          </div>
        </div>
        <div style={{alignItems:"baseline"}}>
          <a href="#" className="btn btn-primary float float-right float-bottom " >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
