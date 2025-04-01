import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const ImagemFundo = styled.div<Props>`
  max-width: 1366px;
  width: 100%;
  height: ${({ dimension }) => (dimension === 'big' ? '384px' : '186px')};
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;

  position: relative;

  ul {
    display: flex;
    align-items: center;
    justify-content: ${({ img }) =>
      img === 'center' ? 'center' : 'space-between'};
    list-style: none;
    padding: 64px 168px;

    li {
      a {
        color: ${cores.rosaEscuro};
        font-weight: bold;
        font-size: 18px;
        line-height: 100%;
      }
    }
  }

  h3 {
    position: absolute;
    left: 414px;
    top: 236px;
    display: ${({ description }) =>
      description === 'normal' ? 'block' : 'none'};
  }
`
