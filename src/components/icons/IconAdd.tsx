
import { FC } from 'react'
import { IconProps } from '@/@types/icon'

const IconAdd: FC<IconProps> = ({ iconColor = '#2B64D3', ...props }) => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14.1562 7.98438H8.15625V13.9844H6.1875V7.98438H0.1875V6.01562H6.1875V0.015625H8.15625V6.01562H14.1562V7.98438Z" fill={iconColor}/>
    </svg>
  )
}

export default IconAdd
