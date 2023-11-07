import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Panel } from "./Panel";
import { MemoryRouter } from "react-router-dom";

describe("Panel Component", () => {
  it("should navigate to the root path when 'Go back' button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/main"]}>
        <Panel isVisibleSidebar={true} setIsVisibleSidebar={() => {}} />
      </MemoryRouter>
    );
    const goBackButton = screen.getByText("Go back");
    fireEvent.click(goBackButton);

    expect(window.location.pathname).toBe("/");
  });
});
