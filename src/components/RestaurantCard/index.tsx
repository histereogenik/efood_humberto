import {
  Card,
  TitleRating,
  RatingStar,
  Description,
  DishImage,
  Infos
} from './styles'

import star from '../../assets/star.svg'
import Button from '../Button'
import Tag from '../Tag'

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
    <Card>
      <DishImage src={image} alt="sushi" />
      <Infos>
        {highlight === true && <Tag>destaque da semana</Tag>}
        <Tag>{origin}</Tag>
      </Infos>
      <div>
        <TitleRating className="flex">
          <h4>{title}</h4>
          <div className="flex">
            <h4>{rating}</h4>
            <RatingStar src={star} alt="star" />
          </div>
        </TitleRating>
        <Description>{getDescription(description)}</Description>
        <Button
          to={`/product/${id}`}
          title="Clique aqui para saber mais"
          background="white"
          type="tight"
        >
          Saiba Mais
        </Button>
      </div>
    </Card>
  )
}

export default RestaurantCard
