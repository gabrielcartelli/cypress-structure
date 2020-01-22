/// <reference types="Cypress" />

const googlePage = require('../support/pageobjects/GooglePage')


beforeEach('Acessar o site de teste', () => {
    cy.visit(Cypress.config('baseUrl'))
})

describe('Google Testes', () => {
    it('Pesquisar por Python no Google', async () => {
        googlePage.sendKeysInputPesquisa('Python')
        googlePage.clickButtonPesquisar()
        googlePage.getTitleResultado().should('contain', 'Python')
    })
})
