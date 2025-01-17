import styled from 'styled-components'
import { InputHTMLAttributes, forwardRef } from 'react'
import { toRem } from '@/libs/fontSize'

export type InputProps = {
  label: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, required = false, ...restProps }, ref) => {
    return (
      <InputContainer>
        <Label>
          {label}
          {required && <RequiredAsterisk>*</RequiredAsterisk>}
        </Label>
        <InputStyled ref={ref} {...restProps} />
      </InputContainer>
    )
  }
)

Input.displayName = 'Input'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: ${toRem(13)};
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`

const RequiredAsterisk = styled.span`
  color: #e53935;
  margin-left: 2px;
`

const InputStyled = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  height: 32px;
  outline: none;
  color: #333;

  &:focus {
    border-color: #aaa;
  }
`

export default Input
