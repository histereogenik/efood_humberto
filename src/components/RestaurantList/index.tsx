import RestaurantCard from '../RestaurantCard'

import { Restaurant } from '../../pages/Home'

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
          title={r.titulo}
          rating={r.avaliacao}
          origin={r.tipo}
          description={r.descricao}
          image={r.capa}
          highlight={r.destacado}
          id={r.id}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
