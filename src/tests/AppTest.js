import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "../api/fetchShow";
import App from "../App";

jest.mock("../api/fetchShow");

const showData = {};

test("", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);

  const { getByText, getAllByText } = render(<App />);
});
