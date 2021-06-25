/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";
import Button from "../components/button";

describe("Button component Test Cases", () => {
  beforeEach(() => {
    mount(<Button />);
  });
  it("Should have correct default text", () => {
    cy.get('[data-cy="button"]').should("have.text", "Click Me");
  });
  it("Should change the button text after clicking", () => {
    cy.get('[data-cy="button"]').click().should("have.text", "Loading...");
  });
});
