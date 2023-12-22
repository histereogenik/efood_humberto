import Header from '../../components/Header'

import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/sushi.png'
import pasta from '../../assets/pasta.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rating: '4.9',
    origin: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    highlight: true
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    origin: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    highlight: false
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    origin: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    highlight: false
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    origin: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    highlight: false
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    origin: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    highlight: false
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    origin: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    highlight: false
  }
]

const LaDolceProfile = () => (
  <>
    <Header />
  </>
)

export default LaDolceProfile
