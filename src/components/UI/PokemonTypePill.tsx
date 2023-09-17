import tw from 'twin.macro'

interface PokemonTypeProps {
  type: string
  data: string[]
}

const TypePill = tw.span`
px-2
rounded-full
text-white
font-bold
uppercase
`
const typeColors: Record<string, { bg: string; text: string }> = {
  normal: { bg: '#718096', text: '#1A202C' },
  fire: { bg: '#F56565', text: '#EDF2F7' },
  water: { bg: '#4299E1', text: '#1A202C' },
  grass: { bg: '#48BB78', text: '#EDF2F7' },
  electric: { bg: '#F6E05E', text: '#2D3748' },
  ice: { bg: 'aqua', text: '#2D3748' },
  fighting: { bg: '#FC8181', text: '#EDF2F7' },
  poison: { bg: '#9F7AEA', text: '#EDF2F7' },
  ground: { bg: '#D69E2E', text: '#EDF2F7' },
  flying: { bg: 'skyblue', text: '#2D3748' },
  psychic: { bg: '#F687B3', text: '#EDF2F7' },
  bug: { bg: '#68D391', text: '#2D3748' },
  rock: { bg: '#D97706', text: '#EDF2F7' },
  ghost: { bg: '#6D28D9', text: '#EDF2F7' },
  steel: { bg: '#4A5568', text: '#EDF2F7' },
  dragon: { bg: 'purple', text: '#EDF2F7' },
  dark: { bg: '#2D3748', text: '#eeeeee' },
  fairy: { bg: '#FAD5E5', text: '#2D3748' },
}

export default function PokemonTypePill({ type, data }: PokemonTypeProps) {
  return (
    <>
      {data.map(item => {
        const classType = typeColors[item] || typeColors[type]
        const textFixed = item.replace('-', ' ')
        return (
          <TypePill
            key={item}
            css={`
              background-color: ${classType.bg};
              color: ${classType.text};
            `}
          >
            {textFixed}
          </TypePill>
        )
      })}
    </>
  )
}
