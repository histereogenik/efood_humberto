import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import { Logo, HeaderContainer, FlexContainer, CartButton } from './styles'
import logoImg from '../../assets/efood_logo.svg'
import cartImg from '../../assets/cart.svg'

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
        <CartButton onClick={openCart}>
          {items.length} <span>produto(s) no carrinho</span>{' '}
          <img src={cartImg} alt="Cart image" />{' '}
        </CartButton>
      </FlexContainer>
    </HeaderContainer>
  )
}

export default Header
