import React from "react";
import Card from "./Cards/Card";
import img1 from './images/getCard.png';
import img2 from './images/2.png'
import img3 from './images/about3.png'
function About() {
  return (
    <div style={{marginTop:"10rem",marginLeft:"auto"}}>
      <section id="about" className="about section-bg">
        <div className="container-fluid px-5 mt-5" data-aos="fade-up">
          <div className="section-title mb-4">
            <h3
              style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
            >
              CHECK OUT WHAT'S COOL ABOUT US
            </h3>
          </div>
          <div className="row">
            <Card
              title={"Gift Card for 9+ brands"}
              img={img1}
              button={"Buy Gift Card"}
            />
            <Card
              title={"Unbeatable Cashback"}
              img={img2}
              button={"Get Cashback"}
            />
            <Card
              title={"Product Comparison"}
              img={img3}
              button={"Compare Now"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
