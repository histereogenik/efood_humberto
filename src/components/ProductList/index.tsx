import { ProductsContainer } from './styles'

import ProductCard from '../ProductCard'
import Product from '../../models/Product'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <ProductsContainer>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          productImg={p.image}
          productTitle={p.title}
          productDescription={p.description}
        />
      ))}
    </ProductsContainer>
  </div>
)

export default ProductList
