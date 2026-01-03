import * as Styles from './styles'

import facebook from '../../assets/images/facebook_logo.png'
import instagram from '../../assets/images/instagram_logo.png'
import twitter from '../../assets/images/twitter_logo.png'
import logoEfood from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <Styles.ContainerFooter>
      <div className="container">
        <Styles.ImgLogo src={logoEfood} alt="Logo" />
        <Styles.SocialMediaImg>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </Styles.SocialMediaImg>
        <span>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </span>
      </div>
    </Styles.ContainerFooter>
  )
}

export default Footer
