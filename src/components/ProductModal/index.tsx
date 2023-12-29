import Button from '../Button'

import { adicionarAoCarrinho } from '../ProductCard'

import { Modal, ModalContainer, Infos, CloseBtn, ProductImage } from './styles'
import pizzaCut from '../../assets/pizzacut.png'
import close from '../../assets/close.png'

const ProductModal = () => (
  <Modal>
    <ModalContainer className="container">
      <CloseBtn src={close} alt="close" />
      <div>
        <ProductImage src={pizzaCut} />
      </div>
      <Infos>
        <h4>Pizza Marguerita</h4>
        <p>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
          <br />
          <br /> Serve: de 2 a 3 pessoas
        </p>
        <Button
          type="tight"
          title="Clique para adicionar ao carrinho"
          background="salmon"
          onClick={adicionarAoCarrinho}
        >
          Adicionar ao carrinho - R$ 60,90
        </Button>
      </Infos>
    </ModalContainer>
    <div className="overlay"></div>
  </Modal>
)

export default ProductModal
