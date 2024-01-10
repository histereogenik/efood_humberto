import Button from '../Button'

import margs from '../../assets/pizzaMarguerita.png'

import {
  CartContainer,
  CartProduct,
  Overlay,
  Sidebar,
  TotalPrice
} from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay></Overlay>
      <Sidebar>
        <ul>
          <CartProduct>
            <img src={margs} alt="nome" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </CartProduct>
          <CartProduct>
            <img src={margs} alt="nome" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </CartProduct>
          <CartProduct>
            <img src={margs} alt="nome" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </CartProduct>
        </ul>
        <TotalPrice>
          <span>Valor Total</span>
          <span>R$ 182,70</span>
        </TotalPrice>
        <Button background="salmon" title="Avançar para o endereço" type="wide">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
