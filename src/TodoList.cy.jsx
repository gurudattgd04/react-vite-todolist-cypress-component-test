/// <reference types="cypress" />

import { TodoList } from "./TodoList"

it("Todo List test", () => {


    const todos = [
        {
            "id": "6593de8b-8dfd-4794-98a5-a35d573867a0",
            "title": "asdas",
            "completed": false
        },
        {
            "id": "67316661-f577-457e-a502-e0d14dfa036d",
            "title": "asdas",
            "completed": false
        }
    ]
    const toggleTodo = cy.spy().as('toggleTodo')
    const deleteTodo = cy.spy().as("deleteTodo")

    cy.mount(<TodoList todos={todos} 
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}/>)
    //cy.get()
})