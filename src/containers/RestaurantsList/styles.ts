import { breakpoints } from '../../styles'
import styled from 'styled-components'

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8%;
  padding: 80px 0;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0;
  }
`
