import React from "react";
import Styles from "./HomeGetStarted.module.css";

export default function HomeGetStarted() {
  return (
    <div className={Styles["get-started"]}>
      <div>
        <h2>Get started!</h2>
        <h1>
          With India&apos;s Fastest Growing <br /> Collaboration Platform
        </h1>
        <p>
          For Businesses, CollabAct connects Commission-based Sales Partners who
          become their extended hand and help them expand their businesses in
          PAN India. And for the Sales Partners, we offer established companies
          whose products/services they can sell without any investment.
        </p>
        <button>Discover more</button>
      </div>
    </div>
  );
}
