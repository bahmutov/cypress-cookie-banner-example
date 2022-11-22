// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
import 'cypress-if'

function closeTheCookieBanner() {
  // check if the banner is visible
  // if yes, click the "Agree" button
  // else do nothing
  cy.get('.banner').if('visible').contains('button', 'Agree').click()
  // confirm the banner is not visible
  cy.get('.banner').should('not.be.visible')
}

it('closes the cookie banner', () => {
  cy.visit('index.html')
  closeTheCookieBanner()
  // confirm the banner stays closed
  // by reloading the page
  cy.reload()
  // but we still can call the utility function
  // and it should do nothing if there is no banner
  closeTheCookieBanner()
})

it('removes the cookie if it exists to force the banner to appear', () => {
  // uncomment to set the cookie
  // and force the "IF(exist)" commands path
  cy.visit('index.html')
  cy.contains('button', 'Agree').click()
  //
  // get the cookie named "cookieConsent"
  // and if it exists, clear it
  // https://on.cypress.io/getcookie
  // https://on.cypress.io/clearcookie
  cy.getCookie('cookieConsent')
    .if('exist')
    .clearCookie('cookieConsent')
    // if the cookie does not exist
    // log "No cookie" to the Command Log
    .else()
    .log('No cookie')
  // visit the "index.html" and confirm
  // the cookie consent banner is visible
  cy.visit('index.html')
  cy.get('.banner').should('be.visible')
})
