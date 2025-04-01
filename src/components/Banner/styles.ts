import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    color: ${cores.corCard};
    font-size: 32px;
    h3 {
      position: absolute;
      top: 24px;
      font-weight: 100;
      line-height: 100%;
      z-index: 1;
    }
    h1 {
      position: absolute;
      bottom: 32px;
      font-weight: bold;
      line-height: 100%;
      z-index: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
