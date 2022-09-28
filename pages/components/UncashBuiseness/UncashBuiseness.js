import React from "react";
import Styles from "./UncashBusinessses.module.css";

export default function UncashBuiseness() {
  const placeholderBusinesses = [
    {
      id: 1,
      image: "/TRIQUENCH.png",
      name: "TriQuench India Pvt. Ltd.",
      products: ["spindles", "CNC Machine"],
      segment: "Industrial Products",
      earningRange: [30000, 100000],
    },
    {
      id: 2,
      image: "/speedforce.png",
      name: "SpeedForce Ventures Pvt. Ltd.",
      products: ["Two Wheeler servicing Franchise"],
      segment: "Franchise",
      earningRange: [35000, 80000],
    },
    {
      id: 3,
      image: "/panache.png",
      name: "Panache Green Tech Solutions Pvt. Ltd.",
      products: ["CoolTops & Waterproofing"],
      segment: "Building construction & Home Products",
      earningRange: [25000, 60000],
    },
    {
      id: 4,
      image: "/sugree.png",
      name: "Sugree Green Power Solutions",
      products: ["Solar Power Generator"],
      segment: "Energy & Environment",
      earningRange: [25000, 75000],
    },
    {
      id: 5,
      image: "/shreelight.png",
      name: "ShreeLight Power Pvt. Ltd.",
      products: ["Electrical Products"],
      segment: "Building Construction & Home Products",
      earningRange: [25000, 60000],
    },
    {
      id: 6,
      image: "/quicktech.png",
      name: "QuickTech",
      products: ["Refurbished & new Apple products"],
      segment: "Business Service",
      earningRange: [25000, 50000],
    },
    {
      id: 7,
      image: "/Rsa.png",
      name: "Ronak Switchgear & Automation",
      products: ["Electrical Switchgear"],
      segment: "Building construction & Home Products",
      earningRange: [35000, 80000],
    },
    {
      id: 8,
      image: "/VCS.png",
      name: "VCS",
      products: ["IceCream Parlours"],
      segment: "Franchise",
      earningRange: [21000, 70000],
    },
    {
      id: 9,
      image: "/SUGAR.png",
      name: "SugarCo",
      products: ["Coconut Sugar"],
      segment: "Fast Moving Consumer Goods(FMGC)",
      earningRange: [10000, 40000],
    },
  ];
  return (
    <div className={Styles.businesses}>
      <h1>Encash our businesses</h1>
      <div>
        {placeholderBusinesses.map((business) => (
          <div className={Styles.businessCard} key={business.id}>
            <div>
              <figure>
                <img src={business.image} alt="" />
              </figure>
              <h2>{business.name}</h2>
            </div>
            <div>
              <div>
                <p>
                  <b>Product</b>: {business.products.join(", ")}
                </p>
                <p>
                  <b>Segment</b>: {business.segment}
                </p>
              </div>
              <div>
                <hr />
                <p>
                  <b>Possible Earning Range</b>
                </p>
                <p>
                  {business.earningRange[0]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  -{" "}
                  {business.earningRange[1]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  Rs/month
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
