import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithTransition } from "shared/lib/tests/renderWithTransition/renderWithTransition";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("default", () => {
    renderWithTransition(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument;
  });
  test("test toggle", () => {
    renderWithTransition(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument;
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
