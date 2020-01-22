/// <reference types="Cypress" />

const googleElements = require('../elements/GoogleElements');


class GooglePage {
    sendKeysInputPesquisa(texto) {
        cy.get(googleElements.cssInputPesquisa).type(texto)
    }

    clickButtonPesquisar() {
        cy.get(googleElements.cssButtonPesquisar).click()
    }

    getTitleResultado() {
        return cy.get(googleElements.cssTitleResultado)
    }
}

module.exports = new GooglePage();