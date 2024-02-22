import ProductCard from '../ProductCard'

import { ProductsContainer } from './styles'

type Props = {
  menuItems?: MenuItem[]
}

const ProductList = ({ menuItems }: Props) => (
  <div className="container">
    <ProductsContainer>
      {menuItems &&
        menuItems.map((i) => (
          <ProductCard
            menuItem={i}
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
