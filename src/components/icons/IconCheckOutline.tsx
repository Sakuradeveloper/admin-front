import { FC } from 'react'
import { IconProps } from '@/@types/icon'

const IconCheckOutLine: FC<IconProps> = ({
  iconColor = '#000',
  shouldAnimate = false,
  onAnimationEnd,
  ...props
}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        shouldAnimate
          ? {
              animationName: 'scaleAnimation',
              animationFillMode: 'forwards',
              animationDuration: '0.8s',
            }
          : undefined
      }
      onAnimationEnd={onAnimationEnd}
      {...props}
    >
      <style>
        {`
          @keyframes scaleAnimation {
            0% {
              transform: scale(1.712);
            }
            25% {
              transform: scale(2.57);
            }
            37.5% {
              transform: scale(2.285);
            }
            100% {
              transform: scale(2.285);
            }
          }
        `}
      </style>
      <g clipPath="url(#clip0_7058_24697)">
        <path
          d="M14 27.9883C6.27546 27.9883 0 21.7129 0 14C0 6.28715 6.27546 0 14 0C21.7245 0 28 6.27546 28 14C28 21.7245 21.7245 28 14 28V27.9883ZM14 1.86978C7.30384 1.86978 1.86978 7.30384 1.86978 14C1.86978 20.6962 7.31553 26.1302 14 26.1302C20.6845 26.1302 26.1302 20.6962 26.1302 14C26.1302 7.30384 20.6845 1.86978 14 1.86978Z"
          fill={iconColor}
        />
        <path
          d="M12.0929 19C11.8516 19 11.6218 18.9064 11.438 18.7309L8.26711 15.5018C7.91096 15.1391 7.91096 14.5424 8.26711 14.1797C8.62326 13.817 9.20919 13.817 9.56534 14.1797L12.0814 16.742L18.4347 10.272C18.7908 9.90933 19.3767 9.90933 19.7329 10.272C20.089 10.6347 20.089 11.2314 19.7329 11.5941L12.7247 18.7309C12.5409 18.9181 12.3112 19 12.0699 19H12.0929Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_7058_24697">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconCheckOutLine
