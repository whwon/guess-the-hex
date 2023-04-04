import React from "react";
import { Card } from "./Card";

type DescriptionProps = {
  setPage: (a: string) => void;
};

export function Description({ setPage }: DescriptionProps) {
  return (
    <div>
      <h1>Description</h1>
      <p>
        This simple game is to train you to recognize different colors with it's
        corresponding hex code. You can further take challenge yourself by
        making the task more difficult by choosing different game modes.
      </p>
      <Card />
      <ul>
        {/* You have three choices and you just guess till correct */}
        <li onClick={() => setPage("classic")}>Classic</li>
        {/* You have a set of life and see how far you can get guessing */}
        <li onClick={() => setPage("survival")}>Survival</li>
        {/* Will give you difficult ones like linear gradient, two colors, or three colors and its timed. */}
        <li onClick={() => setPage("challenger")}>Challenger</li>
      </ul>
      <button>Get Started!</button>
    </div>
  );
}
