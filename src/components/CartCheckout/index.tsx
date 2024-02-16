import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'

import Button from '../Button'
import * as S from './styles'

type Props = {
  toCart: () => void
  totalPrice: string
}

const CartCheckout = ({ toCart, totalPrice }: Props) => {
  const [goToDelivery, setGoToDelivery] = useState(true)
  const [goToPayment, setGoToPayment] = useState(false)
  const [purchase, { data, isLoading, isError }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      name: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
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
      addressNumber: Yup.string()
        .min(1, 'Algo está errado, confira novamente')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        3,
        'O campo precisa ter pelo menos 3 caracteres'
      ),

      name: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
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
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: Number(values.code),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 69
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const changeDeliveryAndPayment = () => {
    setGoToDelivery(!goToDelivery)
    setGoToPayment(!goToPayment)
  }

  return (
    <S.CheckoutContainer>
      {goToDelivery && (
        <>
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
            <S.InfoGroup>
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
                <label htmlFor="addressNumber">Número</label>
                <input
                  id="addressNumber"
                  type="text"
                  name="addressNumber"
                  value={form.values.addressNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('addressNumber', form.errors.addressNumber)}
                </small>
              </S.InputGroup>
            </S.InfoGroup>
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
              <small>
                {getErrorMessage('complement', form.errors.complement)}
              </small>
            </S.InputGroup>
          </form>
          <Button
            background="salmon"
            title="Avançar para o pagamento"
            type="wide"
            onClick={changeDeliveryAndPayment}
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
        </>
      )}
      {goToPayment && (
        <>
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
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  className="cardNumber-width"
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardNumber', form.errors.cardNumber)}
                </small>
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
            title="Finalizar o pagamento"
            type="wide"
            onClick={form.handleSubmit}
          >
            Finalizar pagamento
          </Button>
          <S.ButtonWrapper>
            <Button
              background="salmon"
              title="Voltar para a edição de endereço"
              type="wide"
              onClick={changeDeliveryAndPayment}
            >
              Voltar para a edição de endereço
            </Button>
          </S.ButtonWrapper>
        </>
      )}
    </S.CheckoutContainer>
  )
}

export default CartCheckout
