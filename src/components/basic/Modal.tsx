import {
  FC,
  PropsWithChildren,
  MouseEventHandler,
  CSSProperties,
  ReactNode,
} from 'react'
import styled from 'styled-components'
import IconClose from '@/components/icons/IconClose'
import LoadingCard, { LoadingCardProps } from '@/components/basic/LoadingCard'
import { toRem } from '@/libs/fontSize'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`

const ModalWrapper = styled.div<{ isFullHeight?: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 520px;
  max-height: ${({ isFullHeight }) => (isFullHeight ? '100vh' : '90vh')};
  height: ${({ isFullHeight }) => (isFullHeight ? '100vh' : 'auto')};
  z-index: 1001;
  opacity: 0;
  transition: opacity 0.4s;
  padding: 32px 40px;

  &.show {
    opacity: 1;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.span`
  margin: 0;
  font-size: 24px;
`

const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f2f2f2;
  cursor: pointer;
`

const Content = styled.div<{ overflow?: CSSProperties['overflow'] }>`
  padding: 32px 0;
  overflow: ${({ overflow }) => overflow ?? 'auto'};
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`

const Button = styled.button<{ variant?: 'text' | 'contained' }>`
  padding: 11px 24px;
  font-size: ${toRem(16)};
  width: 200px;
  cursor: pointer;
  border-radius: 10px;
  border: ${({ variant }) => (variant === 'text' ? '1px solid #1976d2' : 'none')};
  background-color: ${({ variant }) => (variant === 'text' ? 'transparent' : '#1976d2')};
  color: ${({ variant }) => (variant === 'text' ? '#1976d2' : '#fff')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }
`

interface ModalProps extends PropsWithChildren {
  isShow: boolean;
  title?: string;
  onClose?: MouseEventHandler<HTMLDivElement>;
  footerContent?: ReactNode;
  isFullHeight?: boolean;
  overflow?: CSSProperties['overflow'];
  loading?: LoadingCardProps;
  primaryButtonText?: string;
  primaryButtonClick?: MouseEventHandler<HTMLButtonElement>;
  secondaryButtonText?: string;
  secondaryButtonClick?: MouseEventHandler<HTMLButtonElement>;
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
  showCloseIcon?: boolean;
}

const Modal: FC<ModalProps> = ({
  isShow,
  title,
  children,
  onClose,
  footerContent,
  isFullHeight,
  overflow,
  loading,
  primaryButtonText,
  primaryButtonClick,
  secondaryButtonText,
  secondaryButtonClick,
  primaryButtonDisabled,
  secondaryButtonDisabled,
  showCloseIcon = true,
}) => {
  return (
    <>
      {isShow && (
        <Wrapper>
          <Overlay className={isShow ? 'show' : ''} onClick={onClose} />
          <ModalWrapper className={isShow ? 'show' : ''} isFullHeight={isFullHeight}>
            <Header>
              <Title>{title}</Title>
              {showCloseIcon && (
                <CloseIcon onClick={onClose}>
                  <IconClose width={20} height={20} />
                </CloseIcon>
              )}
            </Header>
            <Content overflow={overflow}>
              {loading?.isShow ? <LoadingCard {...loading} /> : children}
            </Content>
            {(footerContent || primaryButtonText || secondaryButtonText) && (
              <Footer>
                {footerContent}
                {secondaryButtonText && (
                  <Button
                    variant="text"
                    onClick={secondaryButtonClick}
                    disabled={secondaryButtonDisabled}
                  >
                    {secondaryButtonText}
                  </Button>
                )}
                {primaryButtonText && (
                  <Button
                    variant="contained"
                    onClick={primaryButtonClick}
                    disabled={primaryButtonDisabled}
                  >
                    {primaryButtonText}
                  </Button>
                )}
              </Footer>
            )}
          </ModalWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default Modal
