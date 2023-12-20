import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((r) => (
        <RestaurantCard
          key={r.id}
          title={r.title}
          rating={r.rating}
          origin={r.origin}
          description={r.description}
          image={r.image}
          highlight={r.highlight}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
