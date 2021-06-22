import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

test("Check that the main title is correct", () => {
  const { getByTestId } = render(<App />);
  const titleEle = getByTestId("title");

  expect(titleEle.textContent).toBe("COVID19 Tracker");
});
