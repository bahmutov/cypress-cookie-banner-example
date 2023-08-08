// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import 'cypress-if'

it('closes the cookie banner if needed', () => {
  cy.visit('index.html')
  cy.get('aside.banner')
    .if('visible')
    .wait(1000)
    .contains('button', 'Agree')
    .click()
    .else()
    .log('**not visible**')
  cy.get('aside.banner').should('not.be.visible')
})
