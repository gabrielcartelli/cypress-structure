/// <reference types="Cypress" />

import TesteUmPage from '../support/pageobjects/TesteUmPage'

const testeUmPage = new TesteUmPage

beforeEach('Acessar o site de teste', () => {
    testeUmPage.acessarPaginaInicial();
})

describe('Teste Um', () => {
    it('Realizar Login', () => {
        testeUmPage.informarUsuario();
    })
})
