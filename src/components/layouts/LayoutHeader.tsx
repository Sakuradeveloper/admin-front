'use client'

import { FC } from 'react'
import styled from 'styled-components'
import IconEichiiiLogo from '@/components/icons/IconEichiiiLogo'
import { toRem } from '@/libs/fontSize'
import UserProfileDropdown from '@/components/UserProfileDropdown'

const Header = styled.div`
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 24px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
`

const LogoWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const LogoText = styled.div`
  padding: 8px 12px;
  border-radius: 26px;
  background-color: #f2f2f2;
  font-weight: 500;
  color: #222;
  font-size: ${toRem(10)};
  line-height: 1.2;
`

const LayoutHeader: FC = () => {
  return (
    <Header>
      <LogoWrapper>
        <IconEichiiiLogo />
        <LogoText>管理者ツール</LogoText>
      </LogoWrapper>

      <UserProfileDropdown />
    </Header>
  )
}

export default LayoutHeader