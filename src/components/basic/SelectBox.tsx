import styled from 'styled-components'
import { forwardRef, SelectHTMLAttributes, useState } from 'react'
import IconSelect from '@/components/icons/IconSelect'
import { toRem } from '@/libs/fontSize'

export type SelectBoxProps = {
  label?: string;
  options: { value: string; label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectBox = forwardRef<HTMLSelectElement, SelectBoxProps>(
  ({ label, options, ...restProps }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
      setIsOpen(!isOpen)
    }

    return (
      <SelectContainer>
        {label && <Label>{label}</Label>}
        <SelectWrapper>
          <SelectStyled
            ref={ref}
            {...restProps}
            onClick={handleToggle}
            onBlur={() => setIsOpen(false)}
            onFocus={handleToggle}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectStyled>
          <IconSelectWrapper isOpen={isOpen}>
            <IconSelect />
          </IconSelectWrapper>
        </SelectWrapper>
      </SelectContainer>
    )
  }
)

SelectBox.displayName = 'SelectBox'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`

const SelectWrapper = styled.div`
  position: relative;
`

const SelectStyled = styled.select`
  width: 100%;
  padding: 12px 28px 12px 12px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  font-size: ${toRem(13)};
  color: #333;
  background-color: #fff;
  appearance: none;

  &:focus {
    border-color: #f5e9e9; /* Customize this color as needed */
    outline: none;
  }
`

const IconSelectWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  right: 14px;
  transform: translateY(-50%) rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
  pointer-events: none;
  transition: transform 0.3s ease;
`

export default SelectBox
