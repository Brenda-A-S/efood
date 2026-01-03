import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import BtnDefault from '../../components/Buttons/Default'

import type { RootReducer } from '../../Redux/store'
import { close, remove, clear } from '../../Redux/slice/Cart/slice'
import { formatPrice, getTotalPrice } from '../../utils'
import { usePurchaseMutation } from '../../Redux/services/api'

import * as Style from './styles'

const Cart = () => {
  const { itemsCart, isOpen } = useSelector((state: RootReducer) => state.cart)
  const [continueDelivery, setContinueDelivery] = useState(false)
  const [continuePayment, setContinuePayment] = useState(false)

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      nameInCart: '',
      numberInCart: '',
      cardCode: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'Somente letras são permitidas')
        .required('O campo é obrigatório'),

      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),

      zipCode: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('O campo é obrigatório'),

      number: Yup.string()
        .matches(/^[0-9]+$/, 'Somente números são permitidos')
        .required('O campo é obrigatório'),

      complement: Yup.string(),

      nameInCart: Yup.string()
        .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'Somente letras são permitidas')
        .required('O campo é obrigatório'),

      numberInCart: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão incompleto')
        .required('O campo é obrigatório'),

      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos')
        .required('O campo é obrigatório'),

      expirationMonth: Yup.string()
        .matches(/^\d{2}$/, 'Mês inválido')
        .required('O campo é obrigatório'),

      expirationYear: Yup.string()
        .matches(/^\d{4}$/, 'Ano inválido')
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
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameInCart,
            number: values.numberInCart,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        },
        products: itemsCart.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })


  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isOpen === false) {
      setContinuePayment(false)
      setContinueDelivery(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const finalizePurchase = () => {
    if (itemsCart.length === 0 && isSuccess) {
      return (dispatch(close()), navigate('/'))
    }
    return alert(
      'Houve um erro com a sua compra. Recarregue a página e tente novamente'
    )
  }

  const handleLetterOnlyInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const onlyLetters = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
    form.setFieldValue(field, onlyLetters)
  }

  const handleNumberOnlyInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const onlyNumbers = e.target.value.replace(/\D/g, '')
    form.setFieldValue(field, onlyNumbers)
  }

  return (
    <Style.CartContainer className={isOpen ? 'is-open' : ''}>
      <Style.Overlay onClick={closeCart} />
      <Style.SideBar>
        {!continueDelivery ? (
          <>
            {itemsCart.length > 0 ? (
              <>
                <ul>
                  {itemsCart.map((item) => (
                    <Style.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h5>{item.nome}</h5>
                        <span>{formatPrice(item.preco)}</span>
                      </div>
                      <Style.Dump onClick={() => removeItem(item.id)} />
                    </Style.CartItem>
                  ))}
                </ul>
                <Style.Prices>
                  <span>Valor total</span>
                  <span>{formatPrice(getTotalPrice(itemsCart))}</span>
                </Style.Prices>
                <BtnDefault
                  type="button"
                  onClick={() => setContinueDelivery(true)}
                >
                  Continuar com a entrega
                </BtnDefault>
              </>
            ) : (
              <>
                <h3>
                  O carrinho está vazio, adicione pelo menos um produto para
                  continuar com a compra
                </h3>
              </>
            )}
          </>
        ) : (
          <Style.FormContainer onSubmit={form.handleSubmit}>
            {!continuePayment ? (
              <>
                <h3>Entrega</h3>
                <div className="form__delivery">
                  <Style.InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                    id="receiver"
                    type="text"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={(e) => handleLetterOnlyInput(e, 'receiver')}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('receiver') ? 'error' : ''}
                    />
                  </Style.InputGroup>
                  <Style.InputGroup>
                    <label htmlFor="description">Endereço</label>
                    <input
                      id="description"
                      type="text"
                      name="description"
                      value={form.values.description}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('description') ? 'error' : ''
                      }
                    />
                  </Style.InputGroup>
                  <Style.InputGroup>
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
                  </Style.InputGroup>
                  <div className="d-flex">
                    <Style.InputGroup maxwidth="155px">
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </Style.InputGroup>
                    <Style.InputGroup maxwidth="155px">
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={(e) => handleNumberOnlyInput(e, 'number')}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </Style.InputGroup>
                  </div>
                  <Style.InputGroup>
                    <label htmlFor="complement">Complemento (Opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </Style.InputGroup>
                </div>
                <Style.InputGroup>
                  <BtnDefault
                    type="button"
                    onClick={() => setContinuePayment(true)}
                  >
                    Continuar com o Pagamento
                  </BtnDefault>
                  <BtnDefault
                    type="button"
                    onClick={() => setContinueDelivery(false)}
                  >
                    Voltar para o carrinho
                  </BtnDefault>
                </Style.InputGroup>
              </>
            ) : (
              <>
                {!isSuccess && !data ? (
                  <>
                    <h3>
                      Pagamento - Valor a pagar{' '}
                      {formatPrice(getTotalPrice(itemsCart))}
                    </h3>
                    <div className="form__payment">
                      <Style.InputGroup>
                        <label htmlFor="nameInCart">Nome no cartão</label>
                        <input
                          id="nameInCart"
                          type="text"
                          name="nameInCart"
                          value={form.values.nameInCart}
                          onChange={(e) => handleLetterOnlyInput(e, 'nameInCart')}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('nameInCart') ? 'error' : ''}
                        />
                      </Style.InputGroup>
                      <div className="d-flex">
                        <Style.InputGroup maxwidth="228px">
                          <label htmlFor="numberInCart">Número no cartão</label>
                          <InputMask
                            id="numberInCart"
                            type="text"
                            name="numberInCart"
                            value={form.values.numberInCart}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('numberInCart') ? 'error' : ''
                            }
                            mask="9999 9999 9999 9999"
                          />
                        </Style.InputGroup>
                        <Style.InputGroup maxwidth="83px">
                          <label htmlFor="cardCode">CVV</label>
                          <InputMask
                            id="cardCode"
                            type="text"
                            name="cardCode"
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardCode') ? 'error' : ''
                            }
                            mask="999"
                          />
                        </Style.InputGroup>
                      </div>
                      <div className="d-flex">
                        <Style.InputGroup maxwidth="155px">
                          <label htmlFor="expirationMonth">
                            Mês de vencimento
                          </label>
                          <InputMask
                            id="expirationMonth"
                            type="text"
                            name="expirationMonth"
                            value={form.values.expirationMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expirationMonth')
                                ? 'error'
                                : ''
                            }
                            mask="99"
                          />
                        </Style.InputGroup>
                        <Style.InputGroup maxwidth="155px">
                          <label htmlFor="expirationYear">
                            Ano de vencimento
                          </label>
                          <InputMask
                            id="expirationYear"
                            type="text"
                            name="expirationYear"
                            value={form.values.expirationYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expirationYear')
                                ? 'error'
                                : ''
                            }
                            mask="9999"
                          />
                        </Style.InputGroup>
                      </div>
                    </div>
                    <Style.InputGroup>
                      <BtnDefault
                        type="submit"
                        onClick={form.handleSubmit}
                        disabled={isLoading}
                      >
                        {isLoading
                          ? 'Finalizando compra...'
                          : 'Finalizar compra'}
                      </BtnDefault>
                      <BtnDefault
                        type="button"
                        onClick={() => setContinuePayment(false)}
                      >
                        Voltar para a edição de endereço
                      </BtnDefault>
                    </Style.InputGroup>
                  </>
                ) : (
                  <>
                    <h3>
                      Pedido realizado - <span>{data?.orderId}</span>
                    </h3>
                    <div className="form__finalize__payment">
                      <p>
                        Estamos felizes em informar que seu pedido já está em
                        processo de preparação e, em breve, será entregue no
                        endereço fornecido.
                      </p>
                      <p>
                        Gostaríamos de ressaltar que nossos entregadores não
                        estão autorizados a realizar cobranças extras.
                      </p>
                      <p>
                        Lembre-se da importância de higienizar as mãos após o
                        recebimento do pedido, garantindo assim sua segurança e
                        bem-estar durante a refeição.
                      </p>
                      <p>
                        Esperamos que desfrute de uma deliciosa e agradável
                        experiência gastronômica. Bom apetite!
                      </p>
                    </div>
                    <BtnDefault type="button" onClick={finalizePurchase}>
                      Concluir
                    </BtnDefault>
                  </>
                )}
              </>
            )}
          </Style.FormContainer>
        )}
      </Style.SideBar>
    </Style.CartContainer>
  )
}

export default Cart
