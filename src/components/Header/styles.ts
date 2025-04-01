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
  flex-direction: column;

  position: relative;

  ul {
    display: flex;
    align-items: center;
    justify-content: ${({ img }) =>
      img === 'center' ? 'center' : 'space-between'};
    list-style: none;
    padding: 64px 168px;
  }

  h3 {
    display: ${({ description }) =>
      description === 'normal' ? 'block' : 'none'};

    font-weight: 100;
    font-size: 32px;
    line-height: 100%;
    align-item: center;
    justify-content: center;
    display: flex;
    margin-top: 88px;
  }
`
export const Item = styled.li`
  a {
    color: ${cores.rosaEscuro};
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
  }
`
