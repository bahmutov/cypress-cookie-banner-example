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

it('once closed it stays hidden', () => {
  cy.visit('index.html')
  cy.get('aside.banner').should('be.visible')
  cy.contains('button', 'Agree').click()
  cy.get('aside.banner').should('not.be.visible')
  cy.reload()
  cy.get('aside.banner').should('not.be.visible')
})

it('removes the cookie if it exists to force the banner to appear', () => {
  // uncomment to set the cookie
  // and force the "IF(exist)" commands path
  // cy.visit('index.html')
  // cy.contains('button', 'Agree').click()
  //
  // get the cookie named "cookieConsent"
  // and if it exists, clear it
  // https://on.cypress.io/getcookie
  // https://on.cypress.io/clearcookie
  //
  // if the cookie does not exist
  // log "No cookie" to the Command Log
  //
  // visit the "index.html" and confirm
  // the cookie consent banner is visible
})
