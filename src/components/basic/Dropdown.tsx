import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ReactNode } from 'react'
import { toRem } from '@/libs/fontSize'

type DropdownProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  position?: {
    top?: string
    right?: string
  }
}

const Dropdown = ({ children, isOpen, onClose, position }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <>
      {isOpen && (
        <DropdownMenu ref={dropdownRef} style={position}>
          {children}
        </DropdownMenu>
      )}
    </>
  )
}

const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  right: 12px;
  top: 40px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 16px;
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${toRem(14)};
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5
  }
  
  &.primary {
    color: #2b64d3
  }
  
  &.danger {
    color: #f02a7d
  }

  svg {
    margin-right: 8px
  }
`

export default Dropdown
export { DropdownItem }
