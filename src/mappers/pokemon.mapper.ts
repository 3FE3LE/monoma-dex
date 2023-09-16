import { OriginalData, PokemonI, Stats } from '@/types'

export const mapPokemonResponse = (data: OriginalData): PokemonI => {
  const abilities = data.abilities.map(({ ability }) => ability.name)
  const moves = data.moves.map(({ move }) => move.name)
  const stats = data.stats.map(({ stat, base_stat }) => ({
    name: stat.name,
    base_stat,
  }))
  const types = data.types.map(({ type }) => type.name)
  const img = data.sprites.other['official-artwork'].front_default

  return {
    id: data.id,
    name: data.name,
    weight: data.weight,
    height: data.height,
    abilities,
    moves,
    img,
    stats,
    types,
  }
}

export const mapPokemonStatsToCharts = (data: Stats[]) => {
  const labels = data.map((item: Stats) => {
    const label = item.name
      .replace('-', ' ')
      .replace('special', 'sp')
      .toUpperCase()
    return label
  })
  const values = data.map(item => item.base_stat)

  return {
    labels: labels,
    datasets: [
      {
        label: 'Pokemon stat',
        data: values,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }
}
