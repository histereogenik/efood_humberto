import { useDispatch } from 'react-redux'

import Button from '../Button'

import { add, open } from '../../store/reducers/cart'
import { MenuItem } from '../../pages/Home'

import close from '../../assets/close.png'

import * as S from './styles'

type Props = {
  isVisible: boolean
  closeModal: () => void
  menuItem: MenuItem
}

const ProductModal = ({ isVisible, closeModal, menuItem }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menuItem))
    dispatch(open())
  }

  const formatPriceModal = (price: number) => {
    const formatedNumber = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)

    return 'Adicionar ao carrinho - ' + formatedNumber
  }

  return (
    <S.Modal className={isVisible ? 'visible' : ''}>
      <S.ModalContainer className="container">
        <S.CloseBtn src={close} alt="close" onClick={closeModal} />
        <div>
          <S.ProductImage src={menuItem.foto} />
        </div>
        <S.Infos>
          <h4>{menuItem.nome}</h4>
          <p>
            {menuItem.descricao}
            <br />
            <br /> Serve: de {menuItem.porcao}
          </p>
          <Button
            type="tight"
            title="Clique para adicionar ao carrinho"
            background="salmon"
            onClick={addToCart}
          >
            {formatPriceModal(menuItem.preco)}
          </Button>
        </S.Infos>
      </S.ModalContainer>
      <div className="overlay" onClick={closeModal}></div>
    </S.Modal>
  )
}

export default ProductModal
