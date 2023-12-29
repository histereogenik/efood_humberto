import { ProductsContainer } from './styles'

import ProductCard from '../ProductCard'
import Product from '../../models/Product'
import ProductModal from '../ProductModal'

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
    <ProductModal />
  </div>
)

export default ProductList
