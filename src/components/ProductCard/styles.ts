import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductContainer = styled.div`
  background-color: ${colors.salmon};
  padding: 8px;
  width: 100%;
  max-width: 320px;
  height: 100%;
  max-height: 348px;
  color: ${colors.cream};
`
export const ProductImage = styled.img`
  width: 100%;
  max-height: 160px;
  object-fit: cover;
`
export const ProductName = styled.div`
  font-weight: 900;
  font-size: 16px;
  margin: 8px 0;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  font-weight: 400;
`
