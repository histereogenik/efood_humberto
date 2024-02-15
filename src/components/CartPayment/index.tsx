import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import * as S from './styles'

type Props = {
  toPayment: () => void
  totalPrice: string
}

const CartPayment = ({ toPayment, totalPrice }: Props) => {
  const form = useFormik({
    initialValues: {
      name: '',
      number: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(16, 'Insira um cartão válido')
        .max(16, 'Insira um cartão válido')
        .required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O código precisa ter 3 caracteres')
        .max(3, 'O código precisa ter 3 caracteres')
        .required('Obrigatório'),
      month: Yup.string()
        .min(2, 'Insira apenas 2 caracteres')
        .max(2, 'Insira apenas 2 caracteres')
        .required('O campo é obrigatório'),
      year: Yup.string()
        .min(2, 'Insira apenas 2 caracteres')
        .max(2, 'Insira apenas 2 caracteres')
        .required('O campo é obrigatório')
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
        <h3>Pagamento - Valor a pagar {totalPrice}</h3>
        <S.InputGroup>
          <label htmlFor="name">Nome no cartão</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('name', form.errors.name)}</small>
        </S.InputGroup>
        <S.InfoGroup>
          <S.InputGroup>
            <label htmlFor="number">Número do cartão</label>
            <input
              className="number-width"
              id="number"
              type="text"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('number', form.errors.number)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">CVV</label>
            <input
              className="cvv-width"
              id="code"
              type="text"
              name="code"
              value={form.values.code}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('code', form.errors.code)}</small>
          </S.InputGroup>
        </S.InfoGroup>
        <S.InfoGroup>
          <S.InputGroup>
            <label htmlFor="month">Mês de vencimento</label>
            <input
              id="month"
              type="text"
              name="month"
              value={form.values.month}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('month', form.errors.month)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="year">Ano de vencimento</label>
            <input
              id="year"
              type="text"
              name="year"
              value={form.values.year}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('year', form.errors.year)}</small>
          </S.InputGroup>
        </S.InfoGroup>
      </form>
      <Button
        background="salmon"
        title="Avançar para o pagamento"
        type="wide"
        onClick={form.handleSubmit}
      >
        Finalizar pagamento
      </Button>
      <S.ButtonWrapper>
        <Button
          background="salmon"
          title="Voltar para o carrinho"
          type="wide"
          onClick={toPayment}
        >
          Voltar para a edição de endereço
        </Button>
      </S.ButtonWrapper>
    </S.DeliveryContainer>
  )
}

export default CartPayment
