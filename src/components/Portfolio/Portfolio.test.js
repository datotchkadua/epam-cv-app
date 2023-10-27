import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Portfolio } from "./Portfolio";
import { MemoryRouter,  } from "react-router-dom";

describe("Portfolio Component", () => {
  it("Portfolio should render h2 title", () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    const h2Element = screen.getByText("Portfolio");
    expect(h2Element).toBeInTheDocument();
  });
  it("buttons should filter correct results after click", () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    const codeButton = screen.getByText("Code");
    expect(codeButton).toBeInTheDocument();
    expect(codeButton).not.toHaveClass("active");
    
    fireEvent.click(codeButton);
    expect(codeButton).toHaveClass("active");
  });
});
