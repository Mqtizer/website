import React from 'react'
import styled from '@emotion/styled'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 1rem;
  gap: 0.5rem;
`

const PageButton = styled.button<{ isActive?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: ${props => (props.isActive ? '#4263EB' : '#F9FAFB')};
  color: ${props => (props.isActive ? '#ffffff' : '#4B5563')};

  &:hover {
    background-color: ${props => (props.isActive ? '#3852D3' : '#E5E7EB')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`

const NavigationButton = styled(PageButton)`
  width: auto;
  padding: 0 1rem;
`

const BlogPagination: React.FC<BlogPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = []

    // Always show first page
    buttons.push(
      <PageButton key="first" onClick={() => onPageChange(1)} isActive={currentPage === 1}>
        1
      </PageButton>
    )

    // Show ellipsis if current page is more than 3
    if (currentPage > 3) {
      buttons.push(<span key="ellipsis1">...</span>)
    }

    // Current page and adjacent pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i > 1 && i < totalPages) {
        buttons.push(
          <PageButton key={i} onClick={() => onPageChange(i)} isActive={currentPage === i}>
            {i}
          </PageButton>
        )
      }
    }

    // Show ellipsis if current page is less than totalPages - 2
    if (currentPage < totalPages - 2) {
      buttons.push(<span key="ellipsis2">...</span>)
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      buttons.push(
        <PageButton key="last" onClick={() => onPageChange(totalPages)} isActive={currentPage === totalPages}>
          {totalPages}
        </PageButton>
      )
    }

    return buttons
  }

  return (
    <PaginationContainer>
      <NavigationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </NavigationButton>

      {renderPageButtons()}

      <NavigationButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </NavigationButton>
    </PaginationContainer>
  )
}

export default BlogPagination
