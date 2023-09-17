import React from 'react'
import Grid from './Grid'
import { PokemonI } from '@/types'

describe('<Grid />', () => {
  it('renders', () => {
    const data: PokemonI[] = []
    const onClick = cy.stub();
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Grid items={data} currentPage={0} handleClick={onClick} />)
  })
})