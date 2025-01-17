import { FC } from 'react'
import styled from 'styled-components'

import { toRem } from '@/libs/fontSize'
import Loading from '@/components/basic/Loading'
import IconCheckOutLine from '@/components/icons/IconCheckOutline'

export type LoadingCardProps = {
  isShow: boolean
  isSuccess: boolean
  title?: string
  color?: string
  onAnimationEnd?(): void
}

const LoadingCard: FC<LoadingCardProps> = ({
  isShow,
  isSuccess,
  title,
  color,
  onAnimationEnd,
}) => {
  return (
    <Wrapper
      onClick={(e) => e.stopPropagation()}
      className={isShow ? 'show' : ''}
    >
      <Content>
        {isSuccess ? (
          <IconCheckOutLine
            iconColor={color}
            onAnimationEnd={onAnimationEnd}
            shouldAnimate
          />
        ) : (
          <>
            {title && <Title>{title}</Title>}
            <Notice>このまましばらくお待ちください。</Notice>
            <LoadingWrapper>
              <Loading height={40} width={40} />
            </LoadingWrapper>
          </>
        )}
      </Content>
    </Wrapper>
  )
}

export default LoadingCard

const Wrapper = styled.div`
  
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 0;
`
const Title = styled.span`
  font-size: ${toRem(18)};
  font-weight: 600;
`
const Notice = styled.span`
  font-size: ${toRem(16)};
  margin: 16px 0 0;
`
