import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";
import { MemoryRouter } from "react-router-dom";

describe("Button Component", () => {
  it("should render button with text", () => {
    render(
      <MemoryRouter>
        <Button text="Test Button" />
      </MemoryRouter>
    );
    const buttonEl = screen.getByText("Test Button");
    expect(buttonEl).toBeInTheDocument();
  });
  it("should be disabled when disabled props is true", () => {
    render(
      <MemoryRouter>
        <Button text="Test Button" disabledBtn={true} />
      </MemoryRouter>
    );
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
  });
  it("should call onClick function after click", () => {
    const handleClick = jest.fn();
    render(
      <MemoryRouter>
        <Button text="Test Button" onClickFunc={handleClick} />
      </MemoryRouter>
    );
    const buttonEl = screen.getByText("Test Button");
    fireEvent.click(buttonEl);
    fireEvent.click(buttonEl);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
