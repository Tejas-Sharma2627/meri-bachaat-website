import React,{useState} from "react";
import TabCard from "./Cards/TabCard";
import "./Tabs.css";
function TabsBar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container1 w-75 p-3 h-75 border-0" style={{marginTop:"5rem"}}>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Gift Cards
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Product Comparison
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Cashback
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <TabCard title={"Steps for how MB works for Gift Card"} btn={"Buy Now"} h1={"Buy Gift Card from Us"} h2={"Get your Gift Card via mail"} h3={"Select a Product and Proceed to pay"} h4={"Reedem your coupon in Gift Card Section"}/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <TabCard title={"Steps to compare the Product"} h1={"Open our official website"} h2={"Browse to the section of your choice"} h3={"Lorem Ipsum"} h4={"Lorem ipsum"} btn={"Compare Now"}/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <TabCard title={"How to get Cashback"} h1={"Lorem Ipsum"} h2={"Lorem Ipsum"} h3={"Lorem Ipsum"} h4={"Lorem ipsum"} btn={"Get Cashback"}/>
        </div>
      </div>
    </div>
  );
}

export default TabsBar;
