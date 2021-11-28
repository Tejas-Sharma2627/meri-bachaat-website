import React from 'react'
import SmallCard from './Cards/SmallCard'
import img1 from './images/gift1.png'
import img2 from './images/gift2.png'
import img3 from './images/gift3.png'
import img4 from './images/gift4.png'
import img5 from './images/gift5.png'
import img6 from './images/gift6.png'
import img7 from './images/gift7.png'
import img8 from './images/gift8.png'
function GiftCard() {
    return (
        <div style={{marginTop:"8rem"}}>
        <section id="about" className="about section-bg">
          <div className="container-fluid px-5 mt-5" data-aos="fade-up">
            <div className="section-title mb-4">
              <h3
                style={{ fontSize: "45px", fontWeight: "600", color: "#404fab" }}
              >
                GIFT CARD CATEGORY
              </h3>
              </div>
              <div className="row" style={{marginTop:"4rem"}}>
                <SmallCard title={"eCommerce"} img={img1} text={"99+ Brands"}/>
                <SmallCard  title={"Accessories"} img={img2} text={"99+ Brands"}/>
                <SmallCard title={"Apparels"} img={img3} text={"99+ Brands"}/>
                <SmallCard title={"Grocery"} img={img4} text={"99+ Brands"}/>
                <SmallCard  title={"Food"} img={img5} text={"99+ Brands"}/>
                <SmallCard  title={"Travel"} img={img6} text={"99+ Brands"}/>
                <SmallCard title={"Electronics"} img={img7} text={"99+ Brands"}/>
                <SmallCard title={"Wellness"} img={img8} text={"99+ Brands"}/>
              </div>
              <div className="float float-right" style={{marginTop:"2rem"}} >
              <button type="button" className="btn btn-primary btn-lg">Browse All</button></div>
            
           
          </div>
        </section>
      </div>
    )
}

export default GiftCard
