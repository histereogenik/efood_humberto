import RestaurantCard from '../RestaurantCard'
import Loader from '../Loader'

import { List } from './styles'

type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <List>
        {restaurants &&
          restaurants.map((r) => (
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
}

export default RestaurantList
