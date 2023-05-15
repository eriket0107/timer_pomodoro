import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import IgniteLogo from '../../assets/ignite-symbol.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={IgniteLogo} alt="" />
      <nav>
        <NavLink to="/" aria-label="Timer">
          {<Timer size={24} />}
        </NavLink>
        <NavLink to="/history" aria-label="Histórico">
          {<Scroll size={24} />}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
