describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "sign-up" and click it
    cy.get('a[href*="sign-up"]').click()

    // The new url should include "/sign-up"
    cy.url().should('include', '/sign-up')

    // The new page should contain an h1 with "Sign up"
    cy.get('h1').contains('Sign Up')

    // The new page should contain an input field with the name "email"
    cy.get('input[name="fullName"]').should('be.visible')

    // The new page should contain an input field with the name "email"
    cy.get('input[name="email"]').should('be.visible')

    // The new page should contain an input field with the name "password"
    cy.get('input[name="password"]').should('be.visible')

    // The new page should contain a button with the value "Sign Up"
    cy.get('button').contains('Sign Up').should('be.visible')

    // On button pressed without dirty fields
    cy.get('button').click()

    // div tag element will be visible whit error validation below of email input
    cy.get('div[class="Form__FormError-sc-2ql3du-2 Rihzm"]').contains('Email is required').should('be.visible')

    // div tag element will be visible whit error validation below of password input
    cy.get('div[class="Form__FormError-sc-2ql3du-2 Rihzm"]').last().contains('Password is required').should('be.visible')

    cy.get('span').click()

    cy.get('input[type="text"]').should('be.visible')
    
    cy.get('span').click()

    cy.get('input[type="password"]').should('be.visible')
  })
})
