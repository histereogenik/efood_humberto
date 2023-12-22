import { Image, FlexContainer } from './styles'

import pastaFilter from '../../assets/pasta_filter.png'

const ProfileBanner = () => (
  <Image style={{ backgroundImage: `url(${pastaFilter})` }}>
    <FlexContainer className="container">
      <h1 className="textThin">Italiana</h1>
      <h1 className="textBolder">La Dolce Vita Trattoria</h1>
    </FlexContainer>
  </Image>
)

export default ProfileBanner
