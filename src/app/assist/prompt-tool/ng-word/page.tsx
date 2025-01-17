'use client'

import { FC } from 'react'
import styled from 'styled-components'
import NGWordBox from '@/components/ng-word/NGWordBox'
import ProtectPersonInfoBox from '@/components/ng-word/ProtectPersonInfoBox'

const PageNGWord : FC = () => {
  return (
    <PageNGWordWrapper>
      <NGWordBox />
      <ProtectPersonInfoBox />
    </PageNGWordWrapper>
    
  )
}

const PageNGWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export default PageNGWord
