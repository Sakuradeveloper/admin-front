
import { FC } from 'react'
import { IconProps } from '@/@types/icon'

const IconDelete: FC<IconProps> = ({ iconColor = '#F02A7D', ...props }) => {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
      <path d="M11.8203 1.32031V3H0.179688V1.32031H3.07031L3.92969 0.5H8.07031L8.92969 1.32031H11.8203ZM1 13.8203V3.82031H11V13.8203C11 14.263 10.8307 14.6536 10.4922 14.9922C10.1536 15.3307 9.76302 15.5 9.32031 15.5H2.67969C2.23698 15.5 1.84635 15.3307 1.50781 14.9922C1.16927 14.6536 1 14.263 1 13.8203Z" fill={iconColor} />
    </svg>
  )
}

export default IconDelete
