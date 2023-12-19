import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  white: '#fff',
  lightCream: '#FFF8F2',
  cream: '#FFEBD9',
  yellow: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.lightCream};
    color: ${colors.salmon};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
