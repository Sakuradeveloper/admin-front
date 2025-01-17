'use client'

import styled from 'styled-components'
import { FC } from 'react'
import IconUser from '@/components/icons/IconUser'
import { toRem } from '@/libs/fontSize'
import IconArrowDown from '@/components/icons/IconArrowDown'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f2f2f2;
  margin: 0 12px 0 0;
`

const UserName = styled.div`
  font-size: ${toRem(13)};
  font-weight: 400;
  line-height: 1.8;
  margin: 0 29px 0 0;
`

const UserProfileDropdown: FC = () => {
  return (
    <Wrapper>
      <Icon>
        <IconUser />
      </Icon>
      <UserName> 叡智 太郎 </UserName>
      <IconArrowDown />
    </Wrapper>
  )
}

export default UserProfileDropdown