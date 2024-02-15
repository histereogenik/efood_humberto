import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProfileBanner from '../../components/ProfileBanner'
import ProductList from '../../components/ProductList'

import { useGetSelectedRestaurantQuery } from '../../services/api'

const RestaurantProfile = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: selectedRestaurant } = useGetSelectedRestaurantQuery(id!)

  if (!selectedRestaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <ProfileBanner
        background={selectedRestaurant.capa}
        origin={selectedRestaurant.tipo}
        title={selectedRestaurant.titulo}
      />
      <ProductList menuItems={selectedRestaurant.cardapio} />
    </>
  )
}

export default RestaurantProfile
