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
  title: string
  rating: string
  origin: string
  description: string
  image: string
  highlight?: boolean
}

const RestaurantCard = ({
  title,
  rating,
  origin,
  description,
  image,
  highlight
}: Props) => (
  <Card>
    <DishImage src={image} alt="sushi" />
    <Infos>
      {highlight === true && <Tag>Destaque da semana</Tag>}
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
      <Description>{description}</Description>
      <Button
        title="Clique aqui para saber mais"
        background="white"
        type="tight"
      >
        Saiba Mais
      </Button>
    </div>
  </Card>
)

export default RestaurantCard
