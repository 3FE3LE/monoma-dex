import axios from 'axios'
import { OriginalData, PokemonI } from '@/types'
import { mapPokemonResponse } from '@/mappers/pokemon.mapper'

const baseURL = process.env.NEXT_PUBLIC_API_URL

if (!baseURL) {
  throw new Error('NEXT_PUBLIC_API_URL must be defined')
}

type AllPokemonResponse = {
  results: PokemonI[]
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
    console.error('Error to get Pokemon List:', error)
    return { results: [], count: 0 }
  }
}

export const getPokemonById = async (id: number): Promise<PokemonI | null> => {
  try {
    const response = await axios.get(`${baseURL}${id}`)
    const data = response.data as OriginalData
    return mapPokemonResponse(data)
  } catch (error) {
    console.error('Error to get the Pokemon:', error)
    return null
  }
}
