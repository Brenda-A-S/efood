import RestaurantsLink from '../../components/Buttons/RestaurantsLink'
import BtnCart from '../../components/Buttons/BtnCart'

import backgroundHeader from '../../assets/images/background_header.png'
import logo from '../../assets/images/logo.png'

import * as Styles from './styles'
import { Link } from 'react-router-dom'

export type Props = {
  headernav: 'active' | 'disable'
}

const Header = ({ headernav = 'disable' }: Props) => {
  return (
    <Styles.BackGroundImg
      headernav={headernav}
      style={{ backgroundImage: `url(${backgroundHeader})` }}
    >
      <div className="container">
        {headernav === 'active' ? (
          <Styles.Nav>
            <RestaurantsLink />
            <Link title="Clique aqui para voltar para à página inicial" to="/">
              <Styles.ImgLogo headernav={headernav} src={logo} alt="Logo" />
            </Link>
            <BtnCart />
          </Styles.Nav>
        ) : (
          <Styles.HomeNav>
            <Styles.ImgLogo headernav={headernav} src={logo} alt="Logo" />
            <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
          </Styles.HomeNav>
        )}
      </div>
    </Styles.BackGroundImg>
  )
}

export default Header
