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
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .textThin {
    font-weight: 100;
  }

  .textBolder {
    font-weight: 900;
  }
`
