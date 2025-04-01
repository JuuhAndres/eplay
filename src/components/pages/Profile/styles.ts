import styled from 'styled-components'
import { List } from '../../ProductsList/styles'
import {
  Card,
  Descricao,
  Imagem,
  LinkButton,
  Titulo
} from '../../Product/styles'
import { cores } from '../../../styles'
import { TagContainer } from '../../Tag/styles'

export const ContainerProfile = styled.div`
  ${List} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
  ${Card} {
    width: 320px;
    height: 340px;
    background-color: ${cores.rosaEscuro};

    ${TagContainer} {
      display: none;
    }
  }
  ${Imagem} {
    width: 320px;
    height: 166px;
  }
  ${Titulo} {
    font-size: 16px;
    color: ${cores.letraBotao};
    span {
      display: none;
    }
  }
  ${Descricao} {
    color: ${cores.letraBotao};
    margin: 8px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  ${LinkButton} {
    background-color: ${cores.letraBotao};
    color: ${cores.rosaEscuro};
    display: block;
    text-align: center;
    margin: 0 auto;
    margin: 8px;
  }
`
