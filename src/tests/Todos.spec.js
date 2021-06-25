/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";
import TodosList from "../components/TodosList";

describe("TodosList component Test Cases", () => {
  before(() => {
    cy.intercept(
      {
        url: "https://jsonplaceholder.typicode.com/todos",
      },
      { fixture: "todos" }
    ).as("todos");

    mount(<TodosList />);
  });
  it("Should display TodosList", () => {
    cy.get('[data-cy="todoItem"]').should("have.length", 3);
  });
});
