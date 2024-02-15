import { useFormik } from 'formik'
import Button from '../Button'
import * as S from './styles'

type Props = {
  toCart: () => void
}

const CartDelivery = ({ toCart }: Props) => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form)

  return (
    <S.DeliveryContainer>
      <form onSubmit={form.handleSubmit}>
        <h3>Entrega</h3>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            id="receiver"
            type="text"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="description">Endereço</label>
          <input
            id="description"
            type="text"
            name="description"
            value={form.values.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputGroup>
        <S.NumbersGroup>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              value={form.values.zipCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.NumbersGroup>
        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            type="text"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputGroup>
      </form>
      <Button
        background="salmon"
        title="Avançar para o pagamento"
        type="wide"
        onClick={form.handleSubmit}
      >
        Continuar com o pagamento
      </Button>
      <S.ButtonWrapper>
        <Button
          background="salmon"
          title="Voltar para o carrinho"
          type="wide"
          onClick={toCart}
        >
          Voltar para o carrinho
        </Button>
      </S.ButtonWrapper>
    </S.DeliveryContainer>
  )
}

export default CartDelivery
