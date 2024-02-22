import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />
      <RestaurantList isLoading={isLoading} restaurants={restaurants} />
    </>
  )
}

export default Home
