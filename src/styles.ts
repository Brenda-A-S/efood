import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink_baby: '#E66767',
  pink_light: '#FFEBD9',
  pink_background: '#FFF8F2',
  white: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif ;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.pink_background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;

    }
  }
`
