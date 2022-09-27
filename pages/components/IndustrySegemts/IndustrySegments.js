import React from "react";
import Styles from "./IndustrySegments.module.css"

export default function IndustrySegments() {
  const placeholderSegments = [
    {
      id: 1,
      industries: [
        {
          id: 11,
          icon: "/electriccar.png",
          title: "Automobile and electric vehicle",
          bulletPoints: [
            "Spare Parts & Equipments",
            "Accessories",
            "Electric Vehicles",
            "Fittings & Components",
            "Commercial Vehicles",
            "Battery",
          ],
        },
      ],
    },
    {
      id: 2,
      industries: [
        {
          id: 21,
          icon: "/man.png",
          title: "Industrial Products",
          bulletPoints: [
            "Engineering Machines",
            "Tools & equipments",
            "Industrial Supplies",
          ],
        },
        {
          id: 22,
          icon: "/roll.png",
          title: "Fabric and Textiles",
          bulletPoints: [
            "Apparel, Clothing & Garments",
            "Cotton, Wool Textiles & Fabrics",
          ],
        },
      ],
    },
    {
      id: 3,
      industries: [
        {
          id: 31,
          icon: "/electriccar.png",
          title: "Business Services",
          bulletPoints: [
            "Software, Technology, or IT",
            "Training, Coaching Consulting",
            "Human Resource & Legal",
            "Event Planning",
            "Insurance",
            "Advertisement & Media Support",
          ],
        },
      ],
    },
    {
      id: 4,
      industries: [
        {
          id: 41,
          icon: "/helikopter.png",
          title: "Building construction and home products",
          bulletPoints: [
            "Architectural & Civil Engineering",
            "Ceramic & Flooring",
            "Furniture & Supplies",
            "Home Decor",
            "Electronics & Electrical Goods",
          ],
        },
      ],
    },
    {
      id: 5,
      industries: [
        {
          id: 51,
          icon: "/windmill.png",
          title: "Energy and Enviornment",
          bulletPoints: [
            "Paper & Paper products",
            "Solar Products",
            "Water Treatment",
            "Air Cleaning",
            "Waste Management",
          ],
        },
      ],
    },
    {
      id: 6,
      industries: [
        {
          id: 61,
          icon: "/roll.png",
          title: "Hospital and medical equipments",
          bulletPoints: [
            "Hospital Set-up Equipments",
            "Healthcare Products",
            "Food Supplements",
            "Medical Safety & protective Gears",
          ],
        },
      ],
    },
    {
      id: 7,
      industries: [
        {
          id: 71,
          icon: "/farmer.png",
          title: "Agriculture",
          bulletPoints: [
            "Food & Beverages",
            "Agro Machinery & Equipments",
            "Seeds & Plantation Products",
            "Fertilisers & Soil Additives",
          ],
        },
      ],
    },
    {
      id: 8,
      industries: [
        {
          id: 81,
          icon: "/windmill.png",
          title: "Franchises",
          bulletPoints: [
            "Sports & Fitness",
            "Laboratories",
            "Travel & Tourism",
            "Education",
          ],
        },
      ],
    },
    {
      id: 9,
      industries: [
        {
          id: 91,
          icon: "/dentalchair.png",
          title: "Fast Moving Consumer Goods (FMCG)",
          bulletPoints: [
            "Food & Beverages",
            "Stationery Gifting",
            "Books & Toys",
          ],
        },
      ],
    },
  ];
  return (
    <div className={Styles.industry}>
      <h1>
        Various <span>Industry segments</span>
      </h1>
      <div className={Styles["segment-grid"]}>
        {placeholderSegments.map((card) => (
          <div key={card.id}>
            {card.industries.map((industry) => (
              <div key={industry.id}>
                <img src={industry.icon} alt="" />
                <div>
                  <h2>{industry.title}</h2>
                  <ul>
                    {industry.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
