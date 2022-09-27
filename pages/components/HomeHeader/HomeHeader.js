import React from "react";
import Styles from "./HomeHeader.module.css";

export default function HomeHeader() {
  return (
    <header className={Styles.header}>
      <h1>We Connect</h1>
      <h2>
        Commissioned Sales <br /> Partners with Businesses <br /> to grow
        Exponentially
      </h2>
      <div className={Styles.advantages}>
        <h3>Advantages of associating with CollabAct</h3>
        <div>
          <div className={Styles["advantage-card"]}>
            <h4>Businesses</h4>
            <div>
              <div className={Styles.badge}>
                <img src="/happy.png" alt="" />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-red-600 lg:text-3xl ml-[7px] lg:ml-[20px] relative -mt-2 lg:-mt-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
                </svg>
              </div>
              <p>Global Sales</p>
              <hr />
              <p>Performance-based partners</p>
              <hr />
              <p>Low Expense, Increased Revenue</p>
              <button>Join Us</button>
            </div>
          </div>
          <div className={Styles["advantage-card"]}>
            <h4>Businesses</h4>
            <div>
              <div className={Styles.badge}>
                <img src="/happyyellow.png" alt="" />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-red-600 lg:text-3xl ml-[7px] lg:ml-[20px] relative -mt-2 lg:-mt-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
                </svg>
              </div>
              <p>Flexible work Hours</p>
              <hr />
              <p>Commission-Based partnerships</p>
              <hr />
              <p>Zero investment & Unlimited income</p>
              <button className={Styles["yellow-button"]}>Join Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.socials}>
        <img src="/facebook.png" alt="" />
        <img src="/linkedin.png" alt="" />
        <img src="/instagram.png" alt="" />
        <img src="/twitter.png" alt="" />
      </div>
    </header>
  );
}
