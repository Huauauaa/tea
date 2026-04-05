import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

beforeEach(() => {
  localStorage.removeItem("tea-locale");
});

describe("App", () => {
  it("renders home carousel (default Chinese)", () => {
    render(<App />);
    expect(
      screen.getByRole("region", { name: /六大茶类/i }),
    ).toBeInTheDocument();
  });

  it("renders tea navigation in Chinese by default", () => {
    render(<App />);
    expect(screen.getByRole("navigation", { name: /茶类/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "绿茶" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "其他" })).toBeInTheDocument();
  });
});
