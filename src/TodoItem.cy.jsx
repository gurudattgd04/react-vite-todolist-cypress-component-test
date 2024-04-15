/// <reference types="cypress" />

import { TodoItem } from "./TodoItem"

it("TodoItem test", () => {
    const test = {
        "id": "6593de8b-8dfd-4794-98a5-a35d573867a0",
        "title": "asdas",
        "completed": true
    }
    const toggleTodo = cy.stub().as('toggleTodo')
    const deleteTodo = cy.stub().as("deleteTodo")

    cy.mount(<TodoItem completed={test.completed} 
        id={test.id} 
        title={test.title}
        key={12344} 
        toggleTodo = {toggleTodo}
        deleteTodo = {deleteTodo}
        />)


})