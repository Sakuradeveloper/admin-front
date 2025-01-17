import { AppRouterLayoutProps, generateMetaData } from '@/libs/next'

import LayoutHeader from '@/components/layouts/LayoutHeader'
import LayoutSidebarMenuAndTabNavi from '@/components/layouts/LayoutSidebarMenuAndTabNavi'

export const metadata = generateMetaData({
  title: 'ダッシュボード',
})

export default function LayoutDashboard({ children }: AppRouterLayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutSidebarMenuAndTabNavi title='ダッシュボード'>
        {children}
      </LayoutSidebarMenuAndTabNavi>
    </>
  )
}
