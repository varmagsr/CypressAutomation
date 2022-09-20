/// <reference types="Cypress" />

const dataJson = require('../../fixtures/createuser')

describe('Post User Request', ()=>{
let accessToken = '504cd9e8a00c0a6c38cf16e3b33f752c5566469278d39df39eb8924cdcd7d027'
let randomText = ""
let testEmail = ""

    it('create new user request', ()=> {

        var pattern = "ABCEDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrwtuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@mamumail.com'

        cy.fixture('createuser').then((payload) =>{
            //1. POST User call
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
            'authorization' : "Bearer " + accessToken
            },    
            body: {
                "name": payload.name,
                "gender":payload.gender,
                "email": testEmail,
                "status":payload.status
            }

            //POST User call Verification
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eql(201)
            expect(res.body.data).has.property('email', testEmail)
            expect(res.body.data).has.property('name',payload.name)
            expect(res.body.data).has.property('gender',payload.gender)
            expect(res.body.data).has.property('status',payload.status)
            //Post call user Id reteriving
        }).then((res)=>{
            const userId = res.body.data.id
            cy.log("user is is: "+ userId)
            //2. GET call for newly created user with retived userId
            cy.request({
                method : 'GET',
                url : 'https://gorest.co.in/public/v1/users/'+userId,
                headers : {
                'authorization' : "Bearer " + accessToken
                }
            // Validating the GET call response 
            }).then((res)=>{
                expect(res.status).to.eql(200)
                expect(res.body.data).has.property('email', testEmail)
                expect(res.body.data).has.property('name',payload.name)
                expect(res.body.data).has.property('gender',payload.gender)
                expect(res.body.data).has.property('status',payload.status)

            })



        })

    })


    })


})