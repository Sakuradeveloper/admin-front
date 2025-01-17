'use client'

import { FC, useState } from 'react'
import styled from 'styled-components'
import { useRouter, usePathname } from 'next/navigation'
import IconArrowDown from '@/components/icons/IconArrowDown'
import IconConciergeAssessment from '@/components/icons/IconConciergeAssessment'
import IconDashboard from '@/components/icons/IconDashboard'
import IconSetting from '@/components/icons/IconSetting'
import IconUsageHistory from '@/components/icons/IconUsageHistory'
import IconUserAvatar from '@/components/icons/IconUserAvatar'
import { toRem } from '@/libs/fontSize'

type MenuItem = {
  name: string
  url?: string
  icon?: JSX.Element
  children?: MenuItem[]
}

const menuData: MenuItem[] = [
  {
    name: 'ダッシュボード',
    url: '/dashboard',
    icon: <IconDashboard />,
  },
  {
    name: 'ご利用履歴',
    url: '/history',
    icon: <IconUsageHistory />,
  },
  {
    name: 'コンシェルジュ手配',
    url: '/requests',
    icon: <IconConciergeAssessment />,
  },
  {
    name: 'スタッフ管理',
    url: '/users',
    icon: <IconUserAvatar />,
  },
  {
    name: 'ご利用設定',
    icon: <IconSetting />,
    children: [
      { name: '手配禁止設定', url: '/facility' },
      { name: '叡知DXAI禁止ワード', url: '/assist/prompt-tool/ng-word' },
      { name: '叡知DXAIタスク', url: '/assist/prompt-tool/tasks' },
      { name: '会社情報設定', url: '/account' },
    ],
  },
]

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0 0 0;
`

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

const MenuIcon = styled.div<{
  open: boolean
}>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  svg path {
    fill: ${({ open }) => (open ? '#2b64d3' : '#777')};
  }
`

const SubMenuContainer = styled.div<{
  open: boolean
}>`
  padding-left: 32px;
  display: ${(props: { open: boolean }) => (props.open ? 'block' : 'none')};
`

const MenuLabel = styled.div<{ open: boolean }>`
  font-size: ${toRem(13)};
  font-weight: 500;
  line-height: 1.8;
  color: ${({ open }) => (open ? '#2b64d3' : '#777')};
`

const SubMenuLabel = styled.div<{ open: boolean }>`
  font-size: ${toRem(12)};
  font-weight: 400;
  line-height: 1.7;
  color: ${({ open }) => (open ? '#2b64d3' : '#777')};
  cursor: pointer;
`

const ArrowIcon = styled.div<{
  open: boolean
}>`
  margin-left: auto;
  margin-right: 15px;
  transition: transform 0.2s ease;
  transform: ${({ open }: { open: boolean }) =>
    open ? 'rotate(180deg)' : 'rotate(0deg)'};
`

const SidebarMenu: FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const { push } = useRouter()
  const pathname = usePathname()

  const handleClick = (name: string) => {
    setOpenMenu(openMenu === name ? null : name)
  }

  const navigateTo = (url: string) => {
    if (!url) return

    push(url)
  }

  return (
    <MenuWrapper>
      {
        menuData.map((item, key) => (
          <div key={key}>
            <MenuItemContainer onClick={
              () => item.children ? handleClick(item.name) : push(item.url || '')
            }>
              {item.icon && <MenuIcon open={pathname === item.url}>{item.icon}</MenuIcon>}
              <MenuLabel open={pathname === item.url}>{item.name}</MenuLabel>
              
              {item.children && (
                <ArrowIcon open={openMenu === item.name}>
                  <IconArrowDown />
                </ArrowIcon>
              )}
            </MenuItemContainer>
            {item.children && (
              <SubMenuContainer open={openMenu === item.name}>
                <SubMenuWrapper>
                  {
                    item.children.map((subItem, subKey) => (
                      <SubMenuLabel
                        open={pathname === subItem.url}
                        onClick={() => navigateTo(subItem.url || '')}
                        key={`__${subKey}`}
                      >
                        {subItem.name}
                      </SubMenuLabel>
                    ))
                  }
                </SubMenuWrapper>
              </SubMenuContainer>
            )}
          </div>
        ))
      }
    </MenuWrapper>
  )
}

export default SidebarMenu