export interface PokemonI {
  id: number
  name: string
  weight: number
  height: number
  abilities: string[]
  moves: string[]
  img: string
  stats: { name: string; base_stat: number }[]
  types: string[]
}
export interface OriginalData {
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  height: number
  id: number
  moves: {
    move: {
      name: string
      url: string
    }
  }[]
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
        front_shiny: string
      }
    }
  }
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  weight: number
}

export type Stats = {
  name: string
  base_stat: number
}
