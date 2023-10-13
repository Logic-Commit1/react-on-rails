import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  const renderNavbar = () => {
    render(<Navbar />, { wrapper: MemoryRouter });
  };

  test("render both links", () => {
    //render the navbar
    renderNavbar();
    //expects the link to be there
    expect(screen.getByText("Post List")).toBeInTheDocument();
    expect(screen.getByText("New Post")).toBeInTheDocument();
  });
});
