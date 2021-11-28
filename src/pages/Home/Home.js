import React from "react";
import "./Home.css";
import TabsBar from "./TabsBar";
import Crousal from "./Crousal";
import Navbar from "./Navbar";
import About from "./About";
import Features from "./Features";
import GiftCard from "./GiftCard";
import Offer from "./Offer";
import Foot from "./Foot";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Navbar />

          <Crousal />
        </div>
      </div>
      <div style={{padding:"0 2rem"}}>
        <About />
        <GiftCard />
        <Features />
        <Offer />
      </div>

      <TabsBar />
      <Foot />
    </div>
  );
};

export default Home;
