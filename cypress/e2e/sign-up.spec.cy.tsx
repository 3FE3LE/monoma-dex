describe('Validate Form', () => {
  it('should show form validations', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/sign-up')

    // The new url should include "/sign-up"
    cy.url().should('include', '/sign-up')

    // The new page should contain an input field with the name "email"
    cy.get('input[name="fullName"]').should('be.visible')

    // The new page should contain an input field with the name "email"
    cy.get('input[name="email"]').should('be.visible')

    // The new page should contain an input field with the name "password"
    cy.get('input[name="password"]').should('be.visible')

    // The new page should contain a button with the value "Sign Up"
    // On button pressed without dirty fields
    cy.get('button').contains('Sign Up').should('be.visible').click()

    // The email input will be focused waiting to type a email
    cy.get('input[name="fullName"]').should('be.focus')

    // div tag element will be visible whit error validation below of fullName input
    cy.get('div').contains('Full name is required').should('be.visible')

    // div tag element will be visible whit error validation below of email input
    cy.get('div').contains('Email is required').should('be.visible')

    // div tag element will be visible whit error validation below of password input
    cy.get('div').contains('Password is required').should('be.visible')

    cy.get('input[name=password]').focus().type('hire_me')

    cy.get('span').click()

    cy.get('input[type="text"]').should('be.visible')

    cy.get('span').click()

    cy.get('input[type="password"]').should('be.visible')
  })
})
describe('Sign up exist user', () => {
  it('should try sign up whit exist user', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/sign-up')

    // The new url should include "/sign-up"
    cy.url().should('include', '/sign-up')

    // The new page should contain an input field with the name "full name"
    cy.get('input[name="fullName"]').should('be.visible').focus().type('3FE 3LE')

    // The new page should contain an input field with the name "email"
    cy.get('input[name="email"]').should('be.visible').focus().type('user@mail.com')

    // The new page should contain an input field with the name "password"
    cy.get('input[name="password"]').should('be.visible').focus().type('12345678')

    // The new page should contain a button with the value "Sign Up"
    cy.get('button').contains('Sign Up').should('be.visible').click()

    // div tag element will be visible whit error validation below of fullName input
    cy.get('div').contains('Email already exist').should('be.visible')

    // The new url should include "/sign-up"
    cy.url().should('include', '/sign-up')
    
  })
})
