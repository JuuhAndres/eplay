import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: '#FFF8F2',
  rosaEscuro: '#E66767',
  letraBotao: ' #FFEBD9',
  corCard: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', monospace, sans-serif;
  list-style: none;
  text-decoration:none;
  }

  body{
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
