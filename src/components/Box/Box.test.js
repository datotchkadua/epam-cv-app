import React from "react";
import { render, screen } from "@testing-library/react";
import { Box } from "./Box";

describe("Box Component", () => {
  it("h2 element should be  in the Box component", () => {
    render(<Box title="box title" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
  it("paragrapsh should be in the Box component", () => {
    render(<Box content="box description" />);
    const paragraph = screen.getByText("box description");
    expect(paragraph).toBeInTheDocument();
  });
});
