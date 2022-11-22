// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

function closeTheCookieBanner() {
  // check if the banner is visible
  // if yes, click the "Agree" button
  // else do nothing
  // confirm the banner is not visible
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
