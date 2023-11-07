import React from "react";
import { render, screen } from "@testing-library/react";
import { Info } from "./Info";


describe("Info Component", () => {
  it("should render text from  props", () => {
    render(<Info text="description text" />);
    const paragraphEl = screen.getByText("description text");
    expect(paragraphEl).toBeInTheDocument();
  });
});
