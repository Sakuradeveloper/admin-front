import { FC } from 'react'
import { IconProps } from '@/@types/icon'

const DEFAULT_COLOR = '#777'
const IconUserAvatar: FC<IconProps> = ({
  iconColor = DEFAULT_COLOR,
  ...restProps
}) => {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path d="M6.1875 14.2344C7.17708 14.7552 8.11458 15.0156 9 15.0156C9.88542 15.0156 10.8099 14.7552 11.7734 14.2344C12.763 13.7135 13.5052 13.0755 14 12.3203C13.974 11.5911 13.388 10.9792 12.2422 10.4844C11.0964 9.98958 10.0156 9.74219 9 9.74219C7.98438 9.74219 6.90365 9.98958 5.75781 10.4844C4.61198 10.9531 4.02604 11.5651 4 12.3203C4.49479 13.0755 5.22396 13.7135 6.1875 14.2344ZM10.7578 3.92188C10.263 3.42708 9.67708 3.17969 9 3.17969C8.32292 3.17969 7.73698 3.42708 7.24219 3.92188C6.7474 4.41667 6.5 5.0026 6.5 5.67969C6.5 6.35677 6.7474 6.94271 7.24219 7.4375C7.73698 7.93229 8.32292 8.17969 9 8.17969C9.67708 8.17969 10.263 7.93229 10.7578 7.4375C11.2526 6.94271 11.5 6.35677 11.5 5.67969C11.5 5.0026 11.2526 4.41667 10.7578 3.92188ZM3.10156 3.14062C4.74219 1.5 6.70833 0.679688 9 0.679688C11.2917 0.679688 13.2448 1.5 14.8594 3.14062C16.5 4.75521 17.3203 6.70833 17.3203 9C17.3203 11.2917 16.5 13.2578 14.8594 14.8984C13.2448 16.513 11.2917 17.3203 9 17.3203C6.70833 17.3203 4.74219 16.513 3.10156 14.8984C1.48698 13.2578 0.679688 11.2917 0.679688 9C0.679688 6.70833 1.48698 4.75521 3.10156 3.14062Z" fill={iconColor} />
    </svg>
    
  )
}

export default IconUserAvatar