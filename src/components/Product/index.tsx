import { ProductCard, Description, ProductImage, ProductName } from './styles'

import Button from '../Button'
import pizza from '../../assets/pizza.png'

const adicionarAoCarrinho = () => {
  alert('produto adicionado')
}

const Product = () => (
  <ProductCard>
    <ProductImage src={pizza} alt="pizza" />
    <ProductName>Pizza Marguerita</ProductName>
    <Description>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Description>
    <Button
      background="salmon"
      title="Clique aqui para adicionar esse produto ao carrinho"
      type="wide"
      onClick={adicionarAoCarrinho}
    >
      Adicionar ao carrinho
    </Button>
  </ProductCard>
)

export default Product
