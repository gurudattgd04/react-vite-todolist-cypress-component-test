/* eslint-disable no-undef */
/// <reference types="cypress" />

import { NewTodoForm } from "./NewTodoForm"

 it("TodoForm component test", () => {
    const onSubmit = cy.stub().as("onSubmit")
   cy.mount(
   < NewTodoForm onSubmit={onSubmit} />
   )
   cy.get("#item").type("test")
   cy.contains("Add").click()
   cy.get("@onSubmit").should("be.calledOnceWith", "test")
 })