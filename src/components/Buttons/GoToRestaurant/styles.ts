import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../styles'

export const LinkGoTo = styled(Link)`
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.pink_light};
  background-color: ${colors.pink_baby};
  text-align: center;
`
