import React from "react";
import "./Card.css";
function OfferCard({ title, img }) {
  return (
    <div className="col-lg-4 px-5">
      <div className="card baseBlock border-0 " style={{ width: "18rem" }}>
        <div style={{ minHeight: "320px" }}>
          <img
            className="card-img-top img-fluid "
            src={img}
            alt="Card image cap"
          />
        </div>

        <div className="card-body">
          <h4 className="card-title" style={{ textAlign: "center",fontWeight:"bold" }}>
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
