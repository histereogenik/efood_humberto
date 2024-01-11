import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import { Logo, HeaderContainer, FlexContainer } from './styles'
import logoImg from '../../assets/efood_logo.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <FlexContainer className="container">
        <Link to="/">Restaurantes</Link>
        <Logo src={logoImg} alt="efood" />
        <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
      </FlexContainer>
    </HeaderContainer>
  )
}

export default Header
