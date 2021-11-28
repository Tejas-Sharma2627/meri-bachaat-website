import React from "react";
import OfferCard from "./Cards/OfferCard";
import img1 from './images/offer1.png'
import img2 from './images/offer2.png'
import img3 from './images/offer3.png'
import img4 from './images/offer4.png'
import img5 from './images/offer5.png'
import img6 from './images/offer6.png'
function Offer() {
  return (
    <div>
      <section id="about" className="about section-bg">
        <div className="container-fluid px-5 mt-5" data-aos="fade-up">
          <div className="section-title mb-4">
            <h3
              style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
            >
              WHAT DO WE OFFER
            </h3>
          </div>
          <div className="row">
            <OfferCard
              title={"India's Largest Pre-Shopping Destination"}
              img={img1}
            />
            <OfferCard
              title={"Gift Cards for 300+ brands"}
              img={img2}
            />
            <OfferCard
              title={"Product Comparison"}
              img={img3}
            />
            <OfferCard
              title={"Discount throughout 365 days"}
              img={img4}
            />
            <OfferCard
              title={"Super Savings"}
              img={img5}
            />
            <OfferCard
              title={"Unbeatable Cashback"}
              img={img6}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offer;
