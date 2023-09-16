import React from 'react'
import Layout from './Layout'
import { SessionProvider } from 'next-auth/react'

describe('<Layout />', () => {
  it('renders', () => {
    const children = <div>Element</div>
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SessionProvider>
        <Layout>{children}</Layout>
      </SessionProvider>,
    )
  })
})
