import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/star.svg'

import * as S from './styles'

type Props = {
  id: number
  title: string
  rating: number
  origin: string
  description: string
  image: string
  highlight?: boolean
}

const RestaurantCard = ({
  id,
  title,
  rating,
  origin,
  description,
  image,
  highlight
}: Props) => {
  const getDescription = (desc: string) => {
    if (desc.length > 245) {
      return desc.slice(0, 242) + '...'
    }
    return desc
  }

  return (
    <S.Card>
      <S.DishImage src={image} alt="sushi" />
      <S.Infos>
        {highlight === true && <Tag>destaque da semana</Tag>}
        <Tag>{origin}</Tag>
      </S.Infos>
      <div>
        <S.TitleRating className="flex">
          <h4>{title}</h4>
          <div className="flex">
            <h4>{rating}</h4>
            <S.RatingStar src={star} alt="star" />
          </div>
        </S.TitleRating>
        <S.Description>{getDescription(description)}</S.Description>
        <Button
          to={`/product/${id}`}
          title="Clique aqui para saber mais"
          background="white"
          type="tight"
        >
          Saiba Mais
        </Button>
      </div>
    </S.Card>
  )
}

export default RestaurantCard
