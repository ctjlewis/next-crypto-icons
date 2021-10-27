describe('Icon lookup', () => {
  it('should render correct icons', () => {
    cy.visit('/')

    cy.get('[src*="btc.svg"]')
    cy.get('[src*="eth.svg"]')
    cy.get('[src*="sol.svg"]')
  })
})