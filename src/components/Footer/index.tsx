import { FooterContainer, LogoEfood, Social } from './styles'

import logoEfood from '../../assets/efood_logo.svg'
import logoInstagram from '../../assets/instagram.svg'
import logoFacebook from '../../assets/facebook.svg'
import logoTwitter from '../../assets/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <LogoEfood src={logoEfood} alt="efood" />
      <Social>
        <li>
          <a href="#">
            <img src={logoInstagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={logoFacebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={logoTwitter} alt="twitter" />
          </a>
        </li>
      </Social>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
)

export default Footer
