/// <reference types="cypress" />

describe(“Testing API Endpoints Using Cypress”, () => {

    it(“Test GET Request”, () => {
        cy.request('POST', '/api/boards', {
            name: 'space travel plan'
          })
               .then((response) => {
                      expect(response.body).to.have.property('code', 200);
          })
    })
 
})