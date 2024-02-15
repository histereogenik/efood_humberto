import styled from 'styled-components'
import heroBg from '../../assets/hero_bg.png'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 64px 0;
  background-image: url('${heroBg}');
  height: 168px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 0;
    height: 100%;
  }
`
export const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${colors.salmon};
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`
export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 125px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const CartButton = styled.a`
  display: flex;
  column-gap: 4px;

  img {
    width: 100%;
    max-width: 18px;
  }

  span {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`
