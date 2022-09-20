/// <reference types="Cypress" />


describe('Get API User Testcases', ()=>{
    let accessToken = '504cd9e8a00c0a6c38cf16e3b33f752c5566469278d39df39eb8924cdcd7d027'

it('get users', ()=>{

    cy.request({

        method : 'GET',
        url : 'https://gorest.co.in/public/v1/users',
        headers : {
        'authorization' : "Bearer " + accessToken

        }


    }).then((res)=>{

        expect(res.status).to.eq(200)
        expect(res.body.meta.pagination.limit).to.eq(20)

    })

})

it('get user by id test', ()=>{

    cy.request({

        method : 'GET',
        url : 'https://gorest.co.in/public/v1/users/1548',
        headers : {
        'authorization' : "Bearer " + accessToken

        }

    }).then((res)=>{

        expect(res.status).to.eq(200)
        expect(res.body.data.name).to.eq('Ekadant Khan')

    })



})

})