import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

type Props = {
  toCart: () => void
  totalPrice: string
  finishPurchase: () => void
}

const CartCheckout = ({ toCart, totalPrice, finishPurchase }: Props) => {
  const [goToDelivery, setGoToDelivery] = useState(true)
  const [goToPayment, setGoToPayment] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

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
        .max(8, 'Algo está errado, confira novamente')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(1, 'Algo está errado, confira novamente')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        1,
        'O campo precisa ter pelo menos 1 caractere'
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

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const changeDeliveryAndPayment = () => {
    if (Object.keys(form.touched).length > 0) {
      const fieldsToValidate = goToDelivery
        ? ['receiver', 'description', 'city', 'zipCode', 'addressNumber']
        : ['name', 'cardNumber', 'code', 'month', 'year']

      const errors = fieldsToValidate.reduce((acc, fieldName) => {
        const fieldError = form.errors[fieldName as keyof typeof form.values]
        if (fieldError) {
          acc[fieldName] = fieldError as string
        }
        return acc
      }, {} as Record<string, string>)

      if (Object.keys(errors).length === 0) {
        setGoToDelivery(!goToDelivery)
        setGoToPayment(!goToPayment)
      } else {
        alert('Por favor, preencha todos os campos obrigatórios corretamente')
      }
    } else {
      alert(
        'Por favor, preencha todos os campos obrigatórios antes de prosseguir'
      )
    }
  }

  return (
    <S.CheckoutContainer>
      {isSuccess && data ? (
        <>
          <h3>Pedido realizado - {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button
            background="salmon"
            title="Concluir"
            type="wide"
            onClick={finishPurchase}
          >
            Concluir
          </Button>
        </>
      ) : (
        <>
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
                    className={checkInputHasError('receiver') ? 'error' : ''}
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
                    className={checkInputHasError('description') ? 'error' : ''}
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
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
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
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                    />
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
                      className={
                        checkInputHasError('addressNumber') ? 'error' : ''
                      }
                    />
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
                    className={checkInputHasError('name') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InfoGroup>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      className={`cardNumber-width ${
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }`}
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="code">CVV</label>
                    <input
                      className={`cvv-width ${
                        checkInputHasError('code') ? 'error' : ''
                      }`}
                      id="code"
                      type="text"
                      name="code"
                      value={form.values.code}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
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
                      className={checkInputHasError('month') ? 'error' : ''}
                    />
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
                      className={checkInputHasError('year') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </S.InfoGroup>
              </form>
              <Button
                background="salmon"
                title="Finalizar o pagamento"
                type="wide"
                onClick={form.handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
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
        </>
      )}
    </S.CheckoutContainer>
  )
}

export default CartCheckout
