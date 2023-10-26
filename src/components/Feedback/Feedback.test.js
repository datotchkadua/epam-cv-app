import React from "react";
import { render, screen, } from "@testing-library/react";
import { Feedback } from "./Feedback";

jest.mock("../../assets/card1.png", () => "fake-image-path");
const feedbackData = [
  {
    id: 1,
    person: "Martin Friman",
    img: "fake-image-path",
    job: "programmer",
    websiteLink: "https://www.facebook.com",
    website: "facebook.com",
    feedback: "Lorem ipsum dolor sit amet, am",
  },
];

describe("Feedback Component", () => {
  it("should render h2 with text Experience", () => {
    render(<Feedback data={feedbackData} />);
    const h2Element = screen.getByRole("heading", { name: "Feedbacks" });
    expect(h2Element).toBeInTheDocument();
  });
  it("should render data from props", () => {
    render(<Feedback data={feedbackData} />);

    feedbackData.forEach(({ person, websiteLink, website, feedback }) => {
      const feedbackText = screen.getByText(feedback);
      const imageElement = screen.getByAltText(person);
      const linkElement = screen.getByRole("link", { name: website });

      expect(feedbackText).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", websiteLink);
    });
  });
});
