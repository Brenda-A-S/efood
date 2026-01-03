import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const RestaurantsLinkBtn = styled(Link)`
  color: ${colors.pink_baby};

  span {
    font-size: 18px;
    font-weight: 900;
  }

  .is-active {
    display: none;
    width: 30px;
    height: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .is-active {
      display: block;
    }

    .disabled {
      display: none;
    }
  }
`
