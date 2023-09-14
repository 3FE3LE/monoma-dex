'use client'
import { Grid, Layout, Pagination } from '@/components/UI'
import { useSession } from 'next-auth/react'
import { Pokemon } from '../../types'
import { useEffect, useState } from 'react'
import { getAllPokemon } from '../../services/pokemons'

export default function Dashboard() {
  const { data: session, status } = useSession()
  console.log(session, status)

  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const pageSize = 10;
    const offset = currentPage*10
    getAllPokemon(offset, pageSize).then((data) => {
      setPokemonList(data.results);
    });
    console.log(pokemonList)
  }, [currentPage]);

  const handleChangePage = (page:number)=>{
    setCurrentPage(page)
  }

  return (
    <Layout>
      <Grid items={pokemonList} currentPage={currentPage} />
      <Pagination currentPage={currentPage} onPageChange={handleChangePage} totalPages={101}/>
    </Layout>
  )
}
