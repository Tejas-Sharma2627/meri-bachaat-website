import React from "react";
// import "./Card.css";
import FeaturesCard from "./Cards/FeaturesCard";
import img1 from './images/features1.png'
import img2 from './images/features2.png'
import img3 from './images/features3.png'
import img4 from './images/features4.png'
import img5 from './images/features5.png'
import img6 from './images/features6.png'
function Features() {
  return (
    <div style={{marginTop:"10rem",marginLeft:"auto"}}>
      <section id="about" className="about section-bg">
        <div className="container-fluid px-5 mt-5" data-aos="fade-up">
          <div className="section-title mb-4">
            <h3
              style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
            >
             KEY FEATURES
            </h3>
            </div>
            <div className="row">
              <FeaturesCard title={"Discounts throughout the year"} img={img1} />
              <FeaturesCard title={"Additional Discounts over Brand Discount"} img={img2} />
              <FeaturesCard title={"No limit whatsoever unlike credit card"} img={img3} />
              <FeaturesCard title={"Pay the exact amount you want to spend"} img={img4} />
              <FeaturesCard title={"0 % convience fee"} img={img5} />
              <FeaturesCard title={"No hidden Charges"} img={img6} />
              
            </div>
          
         
        </div>
      </section>
    </div>
  );
}

export default Features;
