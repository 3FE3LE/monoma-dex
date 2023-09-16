import React from 'react'
import Form from './Form'

describe('<Form />', () => {
  it('renders', () => {
    const formTitle = 'Register'
    const onClick = cy.stub()
    const children = <></>
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Form title={formTitle} handleSubmit={onClick} >{children}</Form>)
  })
})
