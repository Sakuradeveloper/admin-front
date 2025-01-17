import styled from 'styled-components'
import { FC } from 'react'
import { toRem } from '@/libs/fontSize'

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handleClick = (page: number) => {    
    if (page > 0 && page <= totalPages) {
      onPageChange(page)
    }
  }
  
  return (
    <PaginationContainer>
      <PageButton disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}>
        &lt;
      </PageButton>
      {[...Array(totalPages)].map((_, index) => (
        <PageButton
          key={index}
          active={currentPage === index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
      <PageButton disabled={currentPage === totalPages} onClick={() => handleClick(currentPage + 1)}>
        &gt;
      </PageButton>
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
`

const PageButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ active }) => (active ? '#1976d2' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#1976d2')};
  border: 1px solid #1976d2;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${toRem(16)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export default Pagination
