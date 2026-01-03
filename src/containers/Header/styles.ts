import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import type { Props } from './index'

export const BackGroundImg = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.headernav === 'active' ? '186px' : '384px')};
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.pink_baby};
  padding: 40px 0;

  .container {
    height: 100%;
  }

  h1 {
    display: flex;
    width: 539px;
    height: 84px;
    font-size: 36px;
    font-weight: 900;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 32px;
      margin-top: 40px;
      width: auto;
      height: auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }
`

export const HomeNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const ImgLogo = styled.img<Props>`
  display: flex;
  width: 125px;
  height: 57.5px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`
