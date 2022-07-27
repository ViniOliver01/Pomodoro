import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header/Index'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
