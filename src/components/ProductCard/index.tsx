import {
  ProductContainer,
  Description,
  ProductImage,
  ProductName
} from './styles'

import Button from '../Button'

type Props = {
  productImg: string
  productTitle: string
  productDescription: string
}

const adicionarAoCarrinho = () => {
  alert('produto adicionado')
}

const ProductCard = ({
  productDescription,
  productImg,
  productTitle
}: Props) => (
  <ProductContainer>
    <ProductImage src={productImg} alt="pizza" />
    <ProductName>{productTitle}</ProductName>
    <Description>{productDescription}</Description>
    <Button
      background="salmon"
      title="Clique aqui para adicionar esse produto ao carrinho"
      type="wide"
      onClick={adicionarAoCarrinho}
    >
      Adicionar ao carrinho
    </Button>
  </ProductContainer>
)

export default ProductCard
