import { Restaurant } from '../../pages/Home'
import RestaurantCard from '../RestaurantCard'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
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
          />
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
