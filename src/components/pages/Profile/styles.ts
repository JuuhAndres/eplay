import styled from 'styled-components'

import { cores } from '../../../styles'

export const ContainerProfile = styled.div`
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const ListItem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 32px;
  margin-top: 56px;
`
export const Item = styled.li`
  max-width: 100%;
  width: 320px;
  height: 338px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.letraBotao};

  img {
    object-fit: cover;
    width: 304px;
    height: 168px;
    margin: 8px;
  }
`
export const Titulo = styled.h3`
  margin: 8px;
  font-size: 16px;
  font-weight: bold;
`
export const Descricao = styled.p`
  margin: 8px;
  font-size: 14px;
  font-weight: normal;
`
export const Botao = styled.a`
  margin: 8px;
  display: block;
  padding: 4px;
  text-align: center;
  background: ${cores.letraBotao};
  color: ${cores.rosaEscuro};
  cursor: pointer;
  text-decoration: none;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background-color: ${cores.rosaEscuro};
  max-width: 1024px;
  height: 340px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: end;
    margin-right: 8px;
    padding-top: 8px;
    cursor: pointer;
  }
`
export const ContainerImage = styled.div`
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 0 0 0 32px;
  }
`
export const ContainerSection = styled.section`
  display: flex;
`
export const ContainerInfo = styled.div`
  margin: 0 0 0 32px;
  color: ${cores.letraBotao};
  width: 656px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400px;
    margin-bottom: 20px;
  }
`

export const ButtonModal = styled.a`
  background-color: ${cores.letraBotao};
  color: ${cores.rosaEscuro};
  padding: 4px;
  text-align: center;
  text-decoration: none;
`
