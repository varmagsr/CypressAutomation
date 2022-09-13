/// <reference types="cypress" />

describe('todo actions', () => {
    beforeEach(() => {
        // Navigating to the website
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        //add new todo list with wait time of 3 seconds.
        cy.get('.new-todo',{timeout:3000}).type("Clean Room{enter}")

    })
    it('Should add a new todo to list', () =>{

        //validating if the Clean room text is present om the todo list
        cy.get('label').should('have.text','Clean Room')
        // checking if the toggel option is checked or not?
        cy.get('.toggle').should('not.be.checked')

    })
    it('Should mark a todo to complete', () =>{
        //clicking on the radio button for marking it as complete state
        cy.get('.toggle').click()
        //validating if the complete status is updated
        cy.get('.toggle').should('be.checked')
        //Validating if the cross/strick line is visable on the completed todo task 
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    
    })
    it.only('Should add a new todo to list', () =>{
        cy.get('.toggle').click()
        //Validating if "clear complete lable is present and click on it"
        cy.contains('Clear ').click()
        //Validating the if completed list items are removed form the todo list.
        cy.get('.todo-list').should('not.have.descendants', 'li')
    
    })
})