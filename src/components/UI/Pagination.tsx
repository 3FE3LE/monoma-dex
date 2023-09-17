import tw from 'twin.macro'
import { ArrowLeft, ArrowRight } from '../Icons'

const PaginationWrapper = tw.div`
z-1
  flex
  justify-evenly
  mb-5
  w-full
  fixed
  bottom-0

`

const PaginationButton = tw.button`
  p-3
  bg-green-100
  text-green-500
  font-bold
  rounded-full
  shadow-md
  transition-all
  hover:(bg-slate-100 scale-110)
  focus:outline-none
  focus:ring
  focus:bg-slate-100

`

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (newPage: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const canGoPrevious = currentPage > 0
  const canGoNext = currentPage < totalPages

  const handlePreviousClick = () => {
    if (canGoPrevious) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (canGoNext) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <PaginationWrapper>
      <PaginationButton onClick={handlePreviousClick} disabled={!canGoPrevious}>
        <ArrowLeft />
      </PaginationButton>
      <PaginationButton>
        {currentPage + 1}/{totalPages}
      </PaginationButton>
      <PaginationButton onClick={handleNextClick} disabled={!canGoNext}>
        <ArrowRight />
      </PaginationButton>
    </PaginationWrapper>
  )
}
