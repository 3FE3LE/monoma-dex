'use client'
import { useEffect, useState } from 'react'
import { getAllPokemon, getPokemonById } from '../../services/pokemons'
import { Grid, Layout, Modal, Pagination } from '@/components/UI'
import { PokemonI } from '../../types'

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [pokemonList, setPokemonList] = useState<PokemonI[]>([])
  const [pokemon, setPokemon] = useState<PokemonI>(pokemonList[0])

  useEffect(() => {
    const pageSize = 10
    const offset = currentPage * 10
    getAllPokemon(offset, pageSize).then(data => {
      setPokemonList(data.results)
    })
  }, [currentPage])

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleCardClick = (id: number) => {
    getPokemonById(id).then(data => {
      if (data !== null) {
        setPokemon(data)
        setIsOpenModal(true)
      }
    })
  }

  return (
    <Layout>
      <Grid
        items={pokemonList}
        handleClick={handleCardClick}
        currentPage={currentPage}
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={handleChangePage}
        totalPages={101}
      />
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        pokemon={pokemon}
      />
    </Layout>
  )
}
