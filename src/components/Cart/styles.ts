import styled from 'styled-components'
import { colors } from '../../styles'
import trashBin from '../../assets/trashbin.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 3;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;

  > button {
    margin-bottom: 16px;
  }

  .empty-cart-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.cream};
    text-align: center;
  }
`
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.cream};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const CartProduct = styled.li`
  display: flex;
  background-color: ${colors.cream};
  color: ${colors.salmon};
  max-width: 100%;
  height: 100%;
  max-height: 96px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${trashBin});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
