describe('Sign in', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/sign-in')

    // The new url should include "/sign-in"
    cy.url().should('include', '/sign-in')

    // The new page should contain an input field with the name "email"
    cy.get('input[name="email"]').should('be.visible')
    
    // The new page should contain an input field with the name "password"
    cy.get('input[name="password"]').should('be.visible')
    
    // The new page should contain a button with the value "Sign in"
    // On button pressed without dirty fields
    cy.get('button').contains('Sign in').should('be.visible').click()

    // The email input will be focused waiting to type a email
    cy.get('input[name="email"]').should('be.focused')
    
    // div tag element will be visible whit error validation below of email input
    cy.get('div').contains('Email is required').should('be.visible')

    // div tag element will be visible whit error validation below of password input
    cy.get('div').contains('Password is required').should('be.visible')

    cy.get('span').click()

    cy.get('input[type="text"]').should('be.visible')
    
    cy.get('span').click()

    cy.get('input[type="password"]').should('be.visible')
  })
})
