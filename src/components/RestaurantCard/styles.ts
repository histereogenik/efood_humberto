import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: 1px solid ${colors.salmon};
  padding: 8px;
  width: 100%;
  max-width: 472px;
  height: 100%;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const DishImage = styled.img`
  width: calc(100% + 18px);
  max-height: 217px;
  object-fit: cover;
  margin-top: -9px;
  margin-left: -9px;
  filter: brightness(80%);
`
export const TitleRating = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;

  h4 {
    font-size: 18px;
  }
`
export const RatingStar = styled.img`
  margin-left: 8px;
  width: 21px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
