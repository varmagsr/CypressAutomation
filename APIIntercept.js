/// <reference types="Cypress" />

describe('intercept with cypress example', ()=>{


    it('Test Api with sample itercept', ()=>{

        cy.visit('https://jsonplaceholder.typicode.com')

        cy.intercept({
            path : '/posts'

        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
            


        })




    })






})