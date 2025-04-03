import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corCard};
  width: 472px;
  height: 460px;
  margin-top: 80px;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.rosaEscuro};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Imagem = styled.img`
  width: 472px;
  height: 217px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
  position: relative;

  span {
    position: absolute;
    right: 40px;
    display: inline-block;
    font-size: 18px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
  margin-left: 8px;
`
export const LinkButton = styled(Link)`
  background-color: ${cores.rosaEscuro};
  color: ${cores.letraBotao};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  cursor: pointer;
  tex-decoration: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
