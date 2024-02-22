import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProfileBanner from '../../components/ProfileBanner'
import ProductList from '../../components/ProductList'

import { useGetSelectedRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

const RestaurantProfile = () => {
  const { id } = useParams()
  const { data: selectedRestaurant } = useGetSelectedRestaurantQuery(id!)

  if (!selectedRestaurant) {
    return <Loader />
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
