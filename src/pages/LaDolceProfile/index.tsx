import Header from '../../components/Header'
import ProfileBanner from '../../components/ProfileBanner'

import pastaFilter from '../../assets/pasta_filter.png'
import Product from '../../components/Product'

const LaDolceProfile = () => (
  <>
    <Header />
    <ProfileBanner
      background={pastaFilter}
      origin="Italiana"
      title="La Dolce Vita Trattoria"
    />
    <Product />
  </>
)

export default LaDolceProfile
