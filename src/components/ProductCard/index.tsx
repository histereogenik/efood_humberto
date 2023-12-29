import {
  ProductContainer,
  Description,
  ProductImage,
  ProductName
} from './styles'

import Button from '../Button'
import { useState } from 'react'
import ProductModal from '../ProductModal'

type Props = {
  productImg: string
  productTitle: string
  productDescription: string
}

const ProductCard = ({
  productDescription,
  productImg,
  productTitle
}: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <ProductContainer>
        <ProductImage src={productImg} alt="pizza" />
        <ProductName>{productTitle}</ProductName>
        <Description>{productDescription}</Description>
        <Button
          background="salmon"
          title="Clique aqui para adicionar esse produto ao carrinho"
          type="wide"
          onClick={openModal}
        >
          Adicionar ao carrinho
        </Button>
      </ProductContainer>
      <ProductModal isVisible={modalIsOpen} closeModal={closeModal} />
    </>
  )
}

export default ProductCard
