import { AppRouterLayoutProps, generateMetaData } from '@/libs/next'

import LayoutHeader from '@/components/layouts/LayoutHeader'
import LayoutSidebarMenuAndBtn from '@/components/layouts/LayoutSidebarMenuAndBtn'
import AddNGBtnAndModal from '@/components/ng-word/AddNGBtnAndModal'

export const metadata = generateMetaData({
  title: 'ダッシュボード',
})

export default function LayoutDashboard({ children }: AppRouterLayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutSidebarMenuAndBtn title='叡智DXAI禁止ワード' button={<AddNGBtnAndModal />}>
        {children}
      </LayoutSidebarMenuAndBtn>
    </>
  )
}
