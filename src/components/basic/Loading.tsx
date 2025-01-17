import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { ComponentProps } from 'react'

import IconLoading from '@/components/icons/IconLoading'

type Props = ComponentProps<typeof IconLoading>

const Loading: FC<Props> = ({ ...props }) => {
  return (
    <LoadingWrapper>
      <IconLoading {...props} />
    </LoadingWrapper>
  )
}

const rotation = keyframes`
  20% {
    transform: rotate(72deg);
  }

  40% {
    transform: rotate(144deg);
  }

  60% {
    transform: rotate(216deg);
  }

  80% {
    transform: rotate(288deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`

export default Loading
