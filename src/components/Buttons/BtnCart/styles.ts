import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const CartBtn = styled.button`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.pink_baby};
  background-color: transparent;
  border: none;
  cursor: pointer;

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
