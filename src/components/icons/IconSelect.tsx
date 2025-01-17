import { FC } from 'react'
import { IconProps } from '@/@types/icon'

const IconSelect: FC<IconProps> = ({ iconColor = '#777777', ...props }) => {
  return (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1.5L4 4.5L7 1.5" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default IconSelect
