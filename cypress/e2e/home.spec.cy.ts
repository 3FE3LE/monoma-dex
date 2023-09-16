describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    
    cy.get('nav').should('be.visible')

    // The new page should contain an h1 with "Welcome! to PKMdex"
    cy.get('h1').contains('Welcome! to PKMdex')

    
  })
})
