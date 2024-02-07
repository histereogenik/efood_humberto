import Button from '../Button'
import * as S from './styles'

const CartDelivery = () => {
  return (
    <S.DeliveryContainer>
      <form>
        <h3>Entrega</h3>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input id="receiver" type="text" name="receiver" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="description">Endereço</label>
          <input id="description" type="text" name="description" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" name="city" />
        </S.InputGroup>
        <S.NumbersGroup>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input id="zipCode" type="text" name="zipCode" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input id="number" type="text" name="number" />
          </S.InputGroup>
        </S.NumbersGroup>
        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" type="text" name="complement" />
        </S.InputGroup>
      </form>
      <Button background="salmon" title="Avançar para o pagamento" type="wide">
        Continuar com o pagamento
      </Button>
      <S.ButtonWrapper>
        <Button background="salmon" title="Voltar para o carrinho" type="wide">
          Voltar para o carrinho
        </Button>
      </S.ButtonWrapper>
    </S.DeliveryContainer>
  )
}

export default CartDelivery
