import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'

export const TightButton = styled.button<
  Omit<Props, 'type' | 'title' | 'children'>
>`
  background-color: ${(props) =>
    props.background === 'white' ? colors.salmon : colors.cream};
  color: ${(props) =>
    props.background === 'salmon' ? colors.salmon : colors.cream};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border: none;
`
export const WideButton = styled(TightButton)`
  width: 100%;
  background-color: ${colors.cream};
  color: ${colors.salmon};
`
