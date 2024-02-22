import { useState } from 'react'

import ProductModal from '../ProductModal'
import Button from '../Button'

import * as S from './styles'

type Props = {
  productImg: string
  productTitle: string
  productDescription: string
  menuItem: MenuItem
}

const ProductCard = ({
  productDescription,
  productImg,
  productTitle,
  menuItem
}: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const getDescription = (desc: string) => {
    if (desc.length > 125) {
      return desc.slice(0, 122) + '...'
    }
    return desc
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <S.ProductContainer>
        <S.ProductImage src={productImg} alt="pizza" />
        <S.ProductName>{productTitle}</S.ProductName>
        <S.Description>{getDescription(productDescription)}</S.Description>
        <Button
          background="salmon"
          title="Clique aqui para adicionar esse produto ao carrinho"
          type="wide"
          onClick={openModal}
        >
          Adicionar ao carrinho
        </Button>
      </S.ProductContainer>
      <ProductModal
        menuItem={menuItem}
        isVisible={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default ProductCard
