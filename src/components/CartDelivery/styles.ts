import styled from 'styled-components'
import { colors } from '../../styles'

export const DeliveryContainer = styled.div`
  color: ${colors.cream};
  font-weight: 700;

  h3 {
    font-size: 16px;
  }

  form {
    margin-bottom: 24px;
  }
`
export const InputGroup = styled.div`
  display: block;
  margin-top: 8px;
  font-size: 14px;

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.cream};
    color: ${colors.blackish};
    font-weight: 700;
    padding: 0 8px;
    border: 1px solid ${colors.cream};
  }
`
export const NumbersGroup = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`
export const ButtonWrapper = styled.div`
  margin-top: 12px;
`
