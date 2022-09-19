/// <reference types="cypress" />
export class ShopPage {

    navigate(){
        cy.visit('http://opencart.abstracta.us/')
        cy.get('h1 > a').should('have.text', 'Your Store')
    }
    searchproduct(productName){
        cy.get('.form-control').type(productName + "{enter}")
        cy.get('.input-group-btn > .btn > .fa').click()
        cy.get('.control-label').should('have.text', 'Search Criteria')
    }
    newuserregisterationpage(){
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
        // cy.get('select').should('be.visible').select('OptionName', {force: true})
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#account > legend').should('have.text', 'Your Personal Details')
    }
    newUserDataFilling(fN,lN,email,ph,pwd,cpwd){
        cy.get('#input-firstname').type(fN)
        cy.get('#input-lastname').type(lN)
        cy.get('#input-email').type(email)
        cy.get('#input-telephone').type(ph)
        cy.get('#input-password').type(pwd)
        cy.get('#input-confirm').type(cpwd)
        cy.get('.col-sm-10 > :nth-child(2) > input').click()
        cy.get('[type="checkbox"]').click()
        cy.get('.pull-right > .btn').click()
        cy.get('.pull-right > .btn').should('have.text', 'Continue')

    }

}
