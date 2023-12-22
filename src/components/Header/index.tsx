import { Logo, HeaderContainer, FlexContainer } from './styles'

import logoImg from '../../assets/efood_logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <FlexContainer className="container">
      <Link to="/">Restaurantes</Link>
      <Logo src={logoImg} alt="efood" />
      <a href="#">0 produto(s) no carrinho</a>
    </FlexContainer>
  </HeaderContainer>
)

export default Header
