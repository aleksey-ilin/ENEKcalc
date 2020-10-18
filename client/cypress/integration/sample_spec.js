describe('Main page', () => {
  it('matches its url', () => {
    cy.visit('/')
    cy.url().should('include', '/')
  })
})
