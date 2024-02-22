import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logoImg from '../../assets/efood_logo.svg'
import cartImg from '../../assets/cart.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <S.FlexContainer className="container">
        <Link title="Clique aqui para acessar a página de restaurantes" to="/">
          Restaurantes
        </Link>
        <S.Logo src={logoImg} alt="efood" />
        <S.CartButton
          title="Clique aqui para abrir o carrinho"
          onClick={openCart}
        >
          {items.length} <span>produto(s) no carrinho</span>{' '}
          <img src={cartImg} alt="Cart image" />{' '}
        </S.CartButton>
      </S.FlexContainer>
    </S.HeaderContainer>
  )
}

export default Header
