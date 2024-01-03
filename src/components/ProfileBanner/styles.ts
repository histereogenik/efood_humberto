import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  padding: 25px 0 32px 0;
  width: 100%;
  height: 280px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  position: relative;

  .textThin {
    font-weight: 100;
  }

  .textBolder {
    font-weight: 900;
  }
`
