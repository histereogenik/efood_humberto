import { useFormik } from 'formik'
import * as Yup from 'yup'

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
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome da cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'Algo está errado, confira novamente')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'Algo está errado, confira novamente')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        3,
        'O campo precisa ter pelo menos 3 caracteres'
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

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
          <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
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
          <small>
            {getErrorMessage('description', form.errors.description)}
          </small>
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
          <small>{getErrorMessage('city', form.errors.city)}</small>
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
            <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
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
            <small>{getErrorMessage('number', form.errors.number)}</small>
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
          <small>{getErrorMessage('complement', form.errors.complement)}</small>
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
