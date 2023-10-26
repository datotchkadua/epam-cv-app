import React from "react";
import { render, screen } from "@testing-library/react";
import { Expertise } from "./Expertise";

const fakeData = [
  {
    date: "2013-2014",
    info: {
      company: "Google",
      job: "Software Engineer",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
  },
];

describe("Expertise Component", () => {
  it("should render h2 with text Experience", () => {
    render(<Expertise data={fakeData} />);
    const h2Element = screen.getByRole("heading", { name: /Experience/i });
    expect(h2Element).toBeInTheDocument();
  });
  it("component should get and render data from props", () => {
    render(<Expertise data={fakeData} />);

    fakeData.forEach(({ date, info: { company, job, description } }) => {
      const dateEl = screen.getByText(date);
      const companyEl = screen.getByText(company);
      const jobEl = screen.getByText(job);
      const descriptionEl = screen.getByText(description);

      expect(dateEl).toBeInTheDocument();
      expect(companyEl).toBeInTheDocument();
      expect(jobEl).toBeInTheDocument();
      expect(descriptionEl).toBeInTheDocument();
    });
  });
});
