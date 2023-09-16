import { mapPokemonStatsToCharts } from '@/mappers/pokemon.mapper'
import { Stats } from '@/types'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import tw from 'twin.macro'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

const ChartWrapper = tw.div`
  max-w-sm
  aspect-square
`

export type PokemonChartStatsProps = {
  data: Stats[]
}

export function PokemonChartStats({ data }: PokemonChartStatsProps) {
  const dataTransformed = mapPokemonStatsToCharts(data)

  return (
    <ChartWrapper>
      <Radar data={dataTransformed} />
    </ChartWrapper>
  )
}
