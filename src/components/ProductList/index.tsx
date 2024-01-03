import { ProductsContainer } from './styles'

import ProductCard from '../ProductCard'
import { MenuItem } from '../../pages/Home'

type Props = {
  menuItems: MenuItem[]
}

const ProductList = ({ menuItems }: Props) => (
  <div className="container">
    <ProductsContainer>
      {menuItems.map((i) => (
        <ProductCard
          key={i.id}
          productTitle={i.nome}
          productDescription={i.descricao}
          productImg={i.foto}
        />
      ))}
    </ProductsContainer>
  </div>
)

export default ProductList
