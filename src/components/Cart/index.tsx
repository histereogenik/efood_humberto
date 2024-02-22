import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartCheckout from '../CartCheckout'
import Button from '../Button'

import { RootReducer } from '../../store'
import { close, remove, reset } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [goToCart, setGoToCart] = useState(true)
  const [goToCheckout, setGoToCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
    setGoToCart(true)
    setGoToCheckout(false)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const changeCartAndDelivery = () => {
    setGoToCart(!goToCart)
    setGoToCheckout(!goToCheckout)
  }

  const finishPurchase = () => {
    dispatch(reset())
    closeCart()
    changeCartAndDelivery()
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      if (currentValue.preco) {
        return (accumulator += currentValue.preco)
      }
      return 0
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        {goToCart && (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartProduct key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      />
                    </S.CartProduct>
                  ))}
                </ul>
                <S.TotalPrice>
                  <span>Valor Total</span>
                  <span>{parseToBrl(getTotalPrice())}</span>
                </S.TotalPrice>
                <Button
                  background="salmon"
                  title="Avançar para o endereço"
                  type="wide"
                  onClick={changeCartAndDelivery}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empty-cart-text">
                O seu carrinho está vazio, adicione algum item para continuar
                com a compra
              </p>
            )}
          </>
        )}
        {goToCheckout && (
          <CartCheckout
            totalPrice={parseToBrl(getTotalPrice())}
            toCart={changeCartAndDelivery}
            finishPurchase={finishPurchase}
            items={items}
          />
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
