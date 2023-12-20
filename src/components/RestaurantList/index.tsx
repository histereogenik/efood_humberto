import RestaurantCard from '../RestaurantCard'
import { List } from './styles'

const RestaurantList = () => (
  <div className="container">
    <List>
      <li>
        <RestaurantCard />
      </li>
      <li>
        <RestaurantCard />
      </li>
      <li>
        <RestaurantCard />
      </li>
      <li>
        <RestaurantCard />
      </li>
      <li>
        <RestaurantCard />
      </li>
      <li>
        <RestaurantCard />
      </li>
    </List>
  </div>
)

export default RestaurantList
