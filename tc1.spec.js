/// <reference types="cypress" />

import { ShopPage } from "../../pageobjects/shop-page"

describe('online store shopping', () =>{
    const shoppage = new ShopPage()

    before(function() {
        cy.fixture("createuser").then(function(Data){
            globalThis.Data = Data
        })
    })

    it("Navigating to the test website: ", () => {
       shoppage.navigate()
    })
    it("search the requried product:", () => {
        shoppage.searchproduct(Data.prod)
    })
    it("Register new user for access:", () => {
        shoppage.newuserregisterationpage()
    })
    it("New User registerition for filling:", ()=>{
        shoppage.newUserDataFilling(Data.fN, Data.lN, Data.email, Data.Ph, Data.pwd, Data.cpwd)
    })
})