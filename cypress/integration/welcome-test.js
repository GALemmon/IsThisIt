import APIKey from '../../src/APIKey'

describe('Welcome page Tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-4-25&end_date=2022-5-1&api_key=${APIKey}`,
      {
        response: 200,
        fixture: 'NEOs.json'
      }
    )
  })

  it('should render a page title', () => {
    cy.visit('http://localhost:3000/')
      .get('.welcome-header')
      .contains('Is This It')
  })

  it('should render a welcome message', () => {
    cy.visit('http://localhost:3000/')
      .get('.welcome-message')
      .contains('Welcome to "Is This It"!')
  })

  it('should have an enter button', () => {
    cy.visit('http://localhost:3000/')
      .get('.enter-button')
      .contains('Click to proceed.')
  })

  it('should send the user to the main page', () => {
    cy.visit('http://localhost:3000/')
      .get('.enter-button')
      .click()
      .url()
      .should('include', '/main')
  })
})
