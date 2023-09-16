'use client'
import { Grid, Layout, Modal, Pagination } from '@/components/UI'
import { Pokemon } from '../../types'
import { useEffect, useState } from 'react'
import { getAllPokemon, getPokemonById } from '../../services/pokemons'

export default function Dashboard() {

  const [currentPage, setCurrentPage] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [IsLoading, setIsLoading] = useState(false)
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

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
    setPokemon(null)
  }

  const handleCardClick = (id: number) => {
    setIsLoading(true)
    getPokemonById(id)
      .then(data => {
        setPokemon(data)
        setIsLoading(false)
      })
      .finally(() => setIsOpenModal(true))
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
