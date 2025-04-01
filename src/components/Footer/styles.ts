import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 298px;
  background-color: ${cores.letraBotao};
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const ContainerUL = styled.div`
  list-style: none;
  display: flex;
  padding: 0 8px;
  margin: 32px auto;
  li {
    margin-right: 8px;
  }
  cursor: pointer;
`
export const DescriptionFooter = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-top: 20px;
`
