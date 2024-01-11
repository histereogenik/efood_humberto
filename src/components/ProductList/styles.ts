import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`
