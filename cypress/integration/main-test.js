import APIKey from '../../src/APIKey'

describe('Main page Tests', () => {
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

  it('should render the main page', () => {
    cy.visit('http://localhost:3000/')
      .get('.enter-button')
      .click()
      .url()
      .should('include', '/main')
  })

  it('should render a header with a title and form', () => {
    cy.get('.main-header')
      .contains('Is This It')
      .get('Form')
      .contains('Sort by:')
  })

  it('should have object cards', () => {
    cy.get('.object-area').children().should('have.length', 62)
  })

  it('cards should contain information', () => {
    cy.get('.object-area div:first')
      .should('contain', '(2021 VP5)')
      .and('contain', '04-24-2022')
      .and('contain', 'No.')
  })

  it('sould sort cards by different criteria', () => {
    cy.get('select[name="sort"]')
      .select('date')
      .get('.object-area div:first')
      .should('contain', '(2021 VP5)')
      .and('contain', '04-24-2022')
      .and('contain', 'No.')
      .get('select[name="sort"]')
      .select('dangerous')
      .get('.object-area div:first')
      .should('contain', '(2022 FG)')
      .and('contain', '04-24-2022')
      .and('contain', 'Yes.')
      .get('select[name="sort"]')
      .select('closest')
      .get('.object-area div:first')
      .should('contain', '418135 (2008 AG33)')
      .and('contain', '04-28-2022')
      .and('contain', 'Yes.')
      .get('select[name="sort"]')
      .select('date')
      .get('.object-area div:first')
      .should('contain', '(2021 VP5)')
      .and('contain', '04-24-2022')
      .and('contain', 'No.')
  })
})
