'use client'

import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { toRem } from '@/libs/fontSize'
import SidebarMenu from '../sidebar'

type Props = {
  title: string
}

const PageContent = styled.div`
  margin: 0 0 0 250px;
  padding: 33px 38px 0 40px;
`

const ContentTitle = styled.div`
  font-size: ${toRem(24)};
  font-weight: 400;
  line-height: 3.4;
`

const SidebarMenuContainer = styled.div`
  position: fixed;
  top: 62px;
  left: 0;
  width: 200px;
  height: 100%;
  padding: 32px 0 0 24px;
  background-color: #fff;
  border-right: 1px solid #e6e6e6;
`

const LayoutSidebarMenuAndTabNavi: FC<PropsWithChildren<Props>> = ({
  title,
  children
}) => {
  return (
    <>
      <SidebarMenuContainer>
        <SidebarMenu />
      </SidebarMenuContainer>
      <PageContent>
        <ContentTitle>{title}</ContentTitle>
        {children}
      </PageContent>
    </>
  )
}

export default LayoutSidebarMenuAndTabNavi