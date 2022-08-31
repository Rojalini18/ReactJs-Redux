import { render, screen } from "@testing-library/react";
import Slider from '../Components/Slider';
import App from "../App"

describe("Test Cases for Slider", () => {
    test("Should be in DOM", () => {
      render(<Slider></Slider>);
      let prev = screen.getByTestId("Pbtn");
      expect(prev).toBeInTheDocument();
      let next = screen.getByTestId("Nbtn");
      expect(next).toBeInTheDocument();
    });
    test("Should have Sliding Functionaltesty", () => {
      render(<App></App>);
      let prev = screen.getByTestId("Pbtn");
      expect(prev).toHaveTextContent("Prev");
      let next = screen.getByTestId("Nbtn");
      expect(next).toHaveTextContent("Next");
      let question = screen.getByTestId("qn")
      expect(question).toHaveTextContent("Question 1")
      let answer = screen.getByTestId("ans")
      expect(answer).toHaveTextContent("Answer 1")
    });
  });