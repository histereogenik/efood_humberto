import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, reset } from '../../store/reducers/cart'

import Button from '../Button'
import {
  CartContainer,
  CartProduct,
  Overlay,
  Sidebar,
  TotalPrice
} from './styles'
import CartCheckout from '../CartCheckout'

export const formatPrice = (price: number) => {
  const formatedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

  return formatedNumber
}

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [goToCart, setGoToCart] = useState(true)
  const [goToCheckout, setGoToCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (accumulator += currentValue.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        {goToCart && (
          <div>
            <ul>
              {items.map((item) => (
                <CartProduct key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </CartProduct>
              ))}
            </ul>
            <TotalPrice>
              <span>Valor Total</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </TotalPrice>
            <Button
              background="salmon"
              title="Avançar para o endereço"
              type="wide"
              onClick={changeCartAndDelivery}
            >
              Continuar com a entrega
            </Button>
          </div>
        )}
        {goToCheckout && (
          <CartCheckout
            totalPrice={formatPrice(getTotalPrice())}
            toCart={changeCartAndDelivery}
            finishPurchase={finishPurchase}
          />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
