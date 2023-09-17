describe('Public navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    
    cy.get('nav').should('be.visible')

    // The new page should contain an h1 with "Welcome! to PKMdex"
    cy.get('h1').contains('Welcome! to PKMdex')

    // Find a link with an href attribute containing "sign-in" and click it
    cy.get('a[href*="sign-in"]').click()

    // The new url should include "/sign-in"
    cy.url().should('include', '/sign-in')

    // The new page should contain an h1 with "Sign in"
    cy.get('h1').contains('Sign in')

    // Find a link with an href attribute containing "sign-up" and click it
    cy.get('a[href*="sign-up"]').click()

    // The new url should include "/sign-up"
    cy.url().should('include', '/sign-up')

    // The new page should contain an h1 with "Sign up"
    cy.get('h1').contains('Sign Up')


    
  })
})