/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'

const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class TesteUmPage {

    acessarPaginaInicial() {
        cy.visit(url)
    }

    informarUsuario() {
        cy.get(loginElements.usuarioLoginInput()).type('diraci')
    }
}

export default TesteUmPage;