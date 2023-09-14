import axios from 'axios'
import { Pokemon } from '../types'

const baseURL = process.env.NEXT_PUBLIC_API_URL

if (!baseURL) {
  throw new Error('NEXT_PUBLIC_API_URL must be defined')
}

type AllPokemonResponse = {
  results: Pokemon[]
  count: number
}

export const getAllPokemon = async (
  page: number,
  pageSize: number,
): Promise<AllPokemonResponse> => {
  try {
    const { data } = await axios.get(
      `${baseURL}?offset=${page}&limit=${pageSize}`,
    )
    return { results: data.results, count: data.count }
  } catch (error) {
    console.error('Error al obtener los Pokémon:', error)
    return { results: [], count: 0 }
  }
}

export const getPokemonById = async (id: number): Promise<Pokemon | null> => {
  try {
    const response = await axios.get<Pokemon>(`${baseURL}/${id}`)
    return response.data
  } catch (error) {
    console.error('Error al obtener el Pokémon:', error)
    return null
  }
}
