// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('closes the cookie banner', () => {
  cy.visit('index.html')
  cy.get('aside.banner').should('be.visible')
  cy.contains('button', 'Agree').click()
  cy.get('aside.banner').should('not.be.visible')
  // confirm the cookie consent was set
  // Tip: inspect the application tab in the DevTools
  cy.getCookie('cookieConsent').should('deep.include', {
    name: 'cookieConsent',
    value: 'given',
  })
})

it('prevents the cookie banner from showing up', () => {
  cy.setCookie('cookieConsent', 'given')
  cy.visit('index.html')
  cy.get('aside.banner').should('not.be.visible')
})
