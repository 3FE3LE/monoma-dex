describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "sign-in" and click it
    cy.get('a[href*="sign-in"]').click()

    // The new url should include "/sign-in"
    cy.url().should('include', '/sign-in')

    // The new page should contain an h1 with "Sign in"
    cy.get('h1').contains('Sign in')

    // The new page should contain an input field with the name "email"
    cy.get('input[name="email"]').should('be.visible')

    // The new page should contain an input field with the name "password"
    cy.get('input[name="password"]').should('be.visible')

    // The new page should contain a button with the value "Sign in"
    cy.get('button').contains('Sign in').should('be.visible')

    // On button pressed without dirty fields
    cy.get('button').click()

    // div tag element will be visible whit error validation below of email input
    cy.get('div[class="Form__FormError-sc-2ql3du-2"]').contains('Email is required').should('be.visible')

    // div tag element will be visible whit error validation below of password input
    cy.get('div[class="Form__FormError-sc-2ql3du-2"]').last().contains('Password is required').should('be.visible')

    cy.get('span').click()

    cy.get('input[type="text"]').should('be.visible')
    
    cy.get('span').click()

    cy.get('input[type="password"]').should('be.visible')
  })
})
