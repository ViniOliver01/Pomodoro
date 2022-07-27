import { HeaderContainer } from './Styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logoIgnite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
