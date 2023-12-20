import { Card, TitleRating, RatingStar, Description, DishImage } from './styles'

import sushi from '../../assets/sushi.png'
import star from '../../assets/star.svg'
import Button from '../Button'

const RestaurantCard = () => (
  <Card>
    <DishImage src={sushi} alt="sushi" />
    <div>
      <TitleRating className="flex">
        <h4>Hioki Sushi</h4>
        <div className="flex">
          <h4>4.9</h4>
          <RatingStar src={star} alt="star" />
        </div>
      </TitleRating>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque
        eos libero ab accusamus, sequi quae voluptas, voluptates voluptatibus
        natus asperiores sunt rerum blanditiis dolorem voluptate autem dolore
        veritatis. Rem.
      </Description>
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
