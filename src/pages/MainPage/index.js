import React from "react";
import {
  Box,
  TimeLine,
  Expertise,
  Skills,
  Portfolio,
  Address,
  Feedback,
} from "../../components";
import personImage1 from "../../assets/person-circle-1.png";
import personImage2 from "../../assets/person-circle-2.jpg";
const dataBox = [
  {
    date: 2001,
    title: "Title 0",
    text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
  },
  {
    date: 2000,
    title: "Title 1",
    text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
  },
  {
    date: 2012,
    title: "Title 2",
    text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
  },
];
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
    person: "John Smith",
    img: personImage2,
    job: "designer",
    websiteLink: "https://twitter.com/wordpress",
    website: "twitter.com",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,necessitatibus, aspernatur dolor minima soluta ratione aperiam",
  },
];
export const MainPage = () => {
  return (
    <div>
      <Box title="About me" />
      <TimeLine data={dataBox} />
      <Expertise data={expertiseData} />
      <Skills />
      <Portfolio />
      <Address />
      <Feedback data={feedbackData} />
    </div>
  );
};
