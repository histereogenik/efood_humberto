import { Image, FlexContainer } from './styles'

type Props = {
  background: string
  origin: string
  title: string
}

const ProfileBanner = ({ background, origin, title }: Props) => (
  <Image style={{ backgroundImage: `url(${background})` }}>
    <FlexContainer className="container">
      <h1 className="textThin">{origin}</h1>
      <h1 className="textBolder">{title}</h1>
    </FlexContainer>
  </Image>
)

export default ProfileBanner
