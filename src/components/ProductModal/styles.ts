import styled from 'styled-components'
import { colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContainer = styled.div`
  background-color: ${colors.salmon};
  padding: 32px;
  display: flex;
  color: ${colors.white};
  position: relative;
  z-index: 1;
`
export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;
`
export const Infos = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0;
  }
`
export const CloseBtn = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
