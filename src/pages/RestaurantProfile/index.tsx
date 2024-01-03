import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProfileBanner from '../../components/ProfileBanner'
import ProductList from '../../components/ProductList'

import { Restaurant } from '../Home'

const RestaurantProfile = () => {
  const { id } = useParams()
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setSelectedRestaurant(res))
  }, [id])

  if (!selectedRestaurant) {
    return <h3>Loading...</h3>
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
