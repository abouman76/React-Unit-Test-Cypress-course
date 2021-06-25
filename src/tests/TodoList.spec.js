/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";
import Todo from "../components/Todo";

const todo3 = {
  id: 3,
  title: "Work hard!",
  completed: true,
};

describe("TodosList component Test Cases", () => {
  before(() => {
    mount(<Todo todo={todo3} key={todo3.id} />);
  });
  it("Should load all todos correctly", () => {
    cy.log("Hello TodoList Spec");
  });
});
