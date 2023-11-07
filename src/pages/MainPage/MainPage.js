import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Box,
  TimeLine,
  Expertise,
  Skills,
  Portfolio,
  Address,
  Feedback,
  Panel,
  Button,
} from "../../components";
import personImage1 from "../../assets/person-circle-1.png";
import personImage2 from "../../assets/person-circle-2.jpg";
import arrowUpSvg from "../../assets/arrow-up.svg";
import "./MainPage.scss";

const expertiseData = [
  {
    date: "2013-2014",
    info: {
      company: "Google",
      job: "Front-end developer / php programmer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
  },
  {
    date: "2012",
    info: {
      company: "Twitter",
      job: "Web developer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    },
  },
];

const feedbackData = [
  {
    id: 1,
    person: "Martin Friman",
    img: personImage1,
    job: "programmer",
    websiteLink: "https://www.facebook.com",
    website: "facebook.com",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam",
  },
  {
    id: 2,
    person: "Martin Friman",
    img: personImage1,
    job: "programmer",
    websiteLink: "https://www.facebook.com",
    website: "facebook.com",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam",
  },
  {
    id: 3,
    person: "John Smith",
    img: personImage2,
    job: "designer",
    websiteLink: "https://twitter.com/wordpress",
    website: "twitter.com",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiamLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiamLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiamLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiamLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiamLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam",
  },
];

export const MainPage = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(true);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="mainPage">
      <section
        className={`${
          !isVisibleSidebar
            ? "mainPage__content no-margin "
            : "mainPage__content"
        }`}
      >
        <Box title="About me" />
        <TimeLine />
        <Expertise data={expertiseData} />
        <Skills />
        <Portfolio />
        <Address />
        <Feedback data={feedbackData} />
        <Button
          btnClass="scroll-btn"
          icon={<img src={arrowUpSvg} alt="burger-menu" />}
          onClickFunc={scrollToTop}
        />
      </section>
      <Panel
        isVisibleSidebar={isVisibleSidebar}
        setIsVisibleSidebar={setIsVisibleSidebar}
      />
    </section>
  );
};
