import styled from 'styled-components'
import heroBg from '../../assets/hero_bg.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 64px 0;
  background-image: url('${heroBg}');
  height: 184px;
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
  }
`
export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 125px;
`
