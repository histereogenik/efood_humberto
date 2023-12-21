import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 40px 0;
  background-color: ${colors.cream};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
`
export const LogoEfood = styled.img`
  width: 125px;
  margin-bottom: 32px;
`
export const Social = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  img {
    width: 24px;
  }
`
