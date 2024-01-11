import styled from 'styled-components'
import heroBg from '../../assets/hero_bg.png'
import { breakpoints } from '../../styles'

export const HeroContainer = styled.div`
  padding: 40px 0;
  background-image: url('${heroBg}');
  text-align: center;
`
export const Logo = styled.img`
  width: 125px;
  margin-bottom: 136px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 40px;
  }
`
export const Description = styled.p`
  font-size: 36px;
  font-weight: 900;
`
