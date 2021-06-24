import React from "react";
import { mount } from "@cypress/react";
import Button from "../components/button";

it("Render the button using Cypress", () => {
  mount(<Button />);
});
