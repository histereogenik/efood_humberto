import Button from '../Button'

import { Modal, ModalContainer, Infos, CloseBtn, ProductImage } from './styles'
import close from '../../assets/close.png'
import { MenuItem } from '../../pages/Home'

type Props = {
  isVisible: boolean
  closeModal: () => void
  menuItem: MenuItem
}

const adicionarAoCarrinho = () => {
  alert('produto adicionado')
}

const ProductModal = ({ isVisible, closeModal, menuItem }: Props) => {
  const formatPrice = (price: number) => {
    const formatedNumber = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)

    return 'Adicionar ao carrinho - ' + formatedNumber
  }

  return (
    <Modal className={isVisible ? 'visible' : ''}>
      <ModalContainer className="container">
        <CloseBtn src={close} alt="close" onClick={closeModal} />
        <div>
          <ProductImage src={menuItem.foto} />
        </div>
        <Infos>
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
            onClick={adicionarAoCarrinho}
          >
            {formatPrice(menuItem.preco)}
          </Button>
        </Infos>
      </ModalContainer>
      <div className="overlay" onClick={closeModal}></div>
    </Modal>
  )
}

export default ProductModal
