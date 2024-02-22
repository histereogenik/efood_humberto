import logoImg from '../../assets/efood_logo.svg'

import { Logo, Description, HeroContainer } from './styles'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <h1>
        <Logo src={logoImg} alt="efood" />
      </h1>
      <Description>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Description>
    </div>
  </HeroContainer>
)

export default Hero
