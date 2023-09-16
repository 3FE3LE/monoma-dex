import Image from 'next/image'
import { PokemonI } from '@/types'
import { staticBlurDataUrl } from '@/utils'
import tw from 'twin.macro'
import { XClose } from '../Icons'
import PokemonChartStats from './PokemonChartStats'
import PokemonTypePill from './PokemonTypePill'

const ModalOverlay = tw.div`
  fixed
  inset-0
  bg-black
  bg-opacity-50
  flex
  items-center
  justify-center
  z-50
  backdrop-blur
  overscroll-none
`

const ModalContainer = tw.div`
  bg-white
  m-5
  w-full
  rounded-3xl
  max-w-4xl
  max-h-screen
`

const ModalHeader = tw.div`
  flex
  justify-between
  items-center
  p-5
  `

const ModalTitle = tw.h1`
  capitalize
  font-extrabold
  text-transparent
  text-4xl
  bg-clip-text
  bg-gradient-to-b
  from-green-500
to-green-600
`

const ModalContent = tw.section`
  p-5
  flex
  flex-col
  gap-5
  md:flex-row
`
const ModalImg = tw(Image)`
  object-contain
  max-w-md
  w-full
  aspect-square
  bg-green-100
  rounded-3xl
`
const ModalInfo = tw.div`
  bg-slate-100
  w-full
  h-full
  p-5
  rounded-3xl
  flex
  flex-col
  gap-5
  max-h-96
  overflow-scroll
`

const ModalCloseButton = tw.button`
  rounded-full
  bg-green-100
  p-3
  shadow-md
  transition-all
  hover:(bg-slate-100 scale-110)
  focus:outline-none
  focus:ring
  focus:bg-slate-100
  `

const ModalLabel = tw.span`
    text-green-500
    font-bold
    text-xl
    capitalize
  `

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  pokemon: PokemonI
}

export default function Modal({ isOpen, onClose, pokemon }: ModalProps) {
  if (!isOpen) return null

  const { img, name, height, weight, id, abilities, moves, stats, types } =
    pokemon

  const movements = moves.slice(0, 4)
  const mainType = types[0]
  const handsToFoots = (height/3).toFixed(1)
  const pokemonLbs = weight/10


  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{name}</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <XClose />
          </ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          <ModalImg
            src={String(img)}
            alt={String(img)}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={staticBlurDataUrl()}
          />
          <ModalInfo>
            <PokemonChartStats data={stats} />
            <ModalLabel>Dex #{id}</ModalLabel>
            <div tw="flex gap-5 items-center">
              <ModalLabel>weight: {pokemonLbs}Lbs </ModalLabel>
              <ModalLabel>height: {handsToFoots}fts</ModalLabel>
            </div>
            <div tw="flex gap-2 items-center">
              <ModalLabel>types: </ModalLabel>
                <PokemonTypePill type={mainType} data={types} />
            </div>
            <div tw="flex gap-2 flex-wrap items-center">
              <ModalLabel>abilities: </ModalLabel>
                <PokemonTypePill
                  
                  type={mainType}
                  data={abilities}
                />
            </div>
            <div tw="flex gap-2 flex-wrap items-center">
              <ModalLabel tw="inline">moves: </ModalLabel>
                <PokemonTypePill  type={mainType} data={movements} />
            </div>
          </ModalInfo>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  )
}
