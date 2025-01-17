import { FC } from 'react'
import { IconProps } from '@/@types/icon'

const DEFAULT_COLOR = '#777'
const IconDashboard: FC<IconProps> = ({
  iconColor = DEFAULT_COLOR,
  ...restProps
}) => {
  return (
    <svg 
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path d="M8.82031 0.5H15.5V5.5H8.82031V0.5ZM8.82031 15.5V7.17969H15.5V15.5H8.82031ZM0.5 15.5V10.5H7.17969V15.5H0.5ZM0.5 8.82031V0.5H7.17969V8.82031H0.5Z" fill={iconColor} />
    </svg>
  )
}

export default IconDashboard