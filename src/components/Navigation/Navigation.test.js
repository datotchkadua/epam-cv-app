import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navigation } from "./Navigation";

describe("Navigation Component", () => {
  it("Link should be in Navigation", () => {
    render(<Navigation />);
    const linkEl = screen.getByText("About me");
    const lastLink = screen.getByText("Feedback");
    expect(linkEl).toBeInTheDocument();
    expect(lastLink).toBeInTheDocument();
  });
});
