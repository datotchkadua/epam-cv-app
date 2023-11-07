import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PhotoBox } from "./PhotoBox";
import { MemoryRouter, Router } from "react-router-dom";

describe("PhotoBox Component", () => {
  it("Photobox should render data from props", () => {
    render(
      <MemoryRouter>
        <PhotoBox
          name="Dato Tchkadua"
          title="Programmer"
          description="10 lorem ipsum"
        />
      </MemoryRouter>
    );

    const imageElement = screen.getByAltText("name");
    const h1Element = screen.getByText(/Dato Tchkadua/i);
    const h3Element = screen.getByText(/Programmer/i);
    const paragraphElement = screen.getByText(/10 lorem ipsum/i);

    expect(imageElement).toBeInTheDocument();
    expect(h1Element).toBeInTheDocument();
    expect(h3Element).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
