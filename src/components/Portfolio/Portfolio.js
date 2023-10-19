import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";
import image1 from "../../assets/card1.png";
import image2 from "../../assets/card2.jpg";

export const Portfolio = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".portfolio__cards", {
        // portfolio__cards: className of the parent of the isotope elements
        itemSelector: ".portfolio__cards--card", // portfolio__cards--card: className of the isotope elements
        layoutMode: "fitRows", // for horizontal isotope
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  //
  const cardsArr = [
    { background: image1, classname: "ui", id: 1 },
    { background: image1, classname: "ui", id: 2 },
    { background: image2, classname: "code", id: 3 },
    { background: image2, classname: "code", id: 4 },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="title">Portfolio</h2>
      <ul className="portfolio__filters">
        <li className="portfolio__filters--li">
          <p
            className={`${filterKey === "*" ? "active" : null} `}
            onClick={() => setFilterKey("*")}
          >
            All /
          </p>
        </li>
        <li className="portfolio__filters--li">
          <p
            className={`${filterKey === "ui" ? "active" : null} `}
            onClick={() => setFilterKey("ui")}
          >
            UI /
          </p>
        </li>
        <li className="portfolio__filters--li">
          <p
            className={`${filterKey === "code" ? "active" : null} `}
            onClick={() => setFilterKey("code")}
          >
            Code
          </p>
        </li>
      </ul>
      <div className="portfolio__cards">
        {cardsArr.map(({ background, classname, id }) => {
          return (
            <div
              className={`portfolio__cards--card ${classname}`}
              style={{ backgroundImage: `url(${background})` }}
              key={id}
            >
              <div className="portfolio__cards--card__hidden">
                <h3 className="portfolio__cards--card__hidden--header">
                  {classname}
                </h3>
                <p className="portfolio__cards--card__hidden--description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, itaque. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Earum, itaque.
                </p>
                <Link
                  className="portfolio__cards--card__hidden--link"
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  View resource
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
