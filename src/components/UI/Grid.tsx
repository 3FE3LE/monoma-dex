import Image from 'next/image'
import { PokemonI } from '@/types'
import { getFormattedDate, staticBlurDataUrl } from '@/utils'
import tw from 'twin.macro'

const GridContainer = tw.section`
  grid
  grid-cols-1
  gap-5
  p-5
  mx-auto
  place-items-center
  w-full
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  2xl:grid-cols-5

`
const GridItem = tw.article`
  box-border
  bg-transparent
  rounded-3xl
  max-w-lg
  h-96
  w-full
  shadow-md
  hover:scale-105
  focus:scale-105
  transition-all
  cursor-pointer
`
const GridItemImg = tw(Image)`
  absolute
  rounded-t-3xl
  bg-gradient-to-b
  from-white
  via-white
  to-emerald-600
  object-cover
  object-center
  z-0
  max-h-72
  w-full
  aspect-square
  `
const CardContainer = tw.div`
  relative
  w-full
  h-full
  flex
  flex-col
  rounded-3xl
  z-1
`

const CardInfo = tw.div`
  h-2/3
  p-5
  flex
  items-end
  text-white
  justify-between
  z-20
`

const CardContent = tw.div`
  p-5
  w-full
  h-1/3
  bg-white
  rounded-b-3xl
  flex
  flex-col
  justify-between
  z-1
`
const CardTitle = tw.h1`
  capitalize
  font-extrabold
  text-transparent
  text-4xl
  bg-clip-text
  bg-gradient-to-b
  from-green-500
  to-green-600
`
const CardSubTitle = tw.h2`
  capitalize
  font-bold
  text-transparent
  bg-clip-text
  bg-gradient-to-b
  from-slate-100
  to-white
`
const CardPill = tw.span`
  bg-white
  text-green-700
  font-black
  rounded-full
  w-12
  text-center
`
type GridProps = {
  items: PokemonI[]
  currentPage: number
  handleClick: (id: number) => void
}

const todayDate = getFormattedDate()

export default function Grid({ items, currentPage, handleClick }: GridProps) {
  const placeHolderItems = Array.from({ length: 10 }, (_, index) => ({
    name: 'PMKdex #' + index,
  }))

  return (
    <GridContainer>
      {items.length > 0
        ? items.map(({ name }, i) => (
            <GridItem
              onClick={() => handleClick(i + 1 + 10 * currentPage)}
              key={name}
            >
              <CardContainer>
                <GridItemImg
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    i + 1 + 10 * currentPage
                  }.png`}
                  alt={`pokemon/${i + 1}.png`}
                  height={100}
                  width={100}
                  placeholder='blur'
                  blurDataURL={staticBlurDataUrl()}
                />
                <CardInfo>
                  <CardSubTitle>{todayDate}</CardSubTitle>
                  <CardPill>#{i + 1 + 10 * currentPage}</CardPill>
                </CardInfo>
                <CardContent>
                  <CardTitle>{name}</CardTitle>
                  <div tw="text-sm text-green-600 ">#{name}</div>
                </CardContent>
              </CardContainer>
            </GridItem>
          ))
        : placeHolderItems.map(({ name }, i) => (
            <GridItem key={name}>
              <CardContainer>
                <GridItemImg
                  tw="animate-pulse"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${0}.png`}
                  alt={`pokemon/${0}.png`}
                  height={100}
                  width={100}
                  placeholder='blur'
                  blurDataURL={staticBlurDataUrl()}
                />
                <CardInfo>
                  <CardSubTitle>{todayDate}</CardSubTitle>
                  <CardPill>4.0 kg</CardPill>
                </CardInfo>
                <CardContent>
                  <CardTitle>{name}</CardTitle>
                  <div tw="text-sm text-green-600 ">#{name}</div>
                </CardContent>
              </CardContainer>
            </GridItem>
          ))}
    </GridContainer>
  )
}
