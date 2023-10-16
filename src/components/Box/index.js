import React from "react";
import "./Box.scss";

let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
        necessitatibus, aspernatur dolor minima soluta ratione aperiam
        doloribus, praesentium enim sint ducimus alias reprehenderit deleniti
        sequi eos inventore commodi veniam culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
        necessitatibus, aspernatur dolor minima soluta ratione aperiam
        doloribus, praesentium enim sint ducimus alias reprehenderit deleniti
        sequi eos inventore commodi veniam culpa.`;

export const Box = ({ title, content = str }) => {
  return (
    <div className="box">
      <h2 className="box__header"> {title}</h2>
      <p className="box__description">{content}</p>
    </div>
  );
};
