import close from '../../../assets/image/close.png'
import image3 from '../../../assets/image/image3.png'
import {
  ContainerProfile,
  ListItem,
  Item,
  Titulo,
  Descricao,
  Botao,
  Modal,
  ModalContent,
  ContainerImage,
  ContainerSection,
  ContainerInfo,
  ButtonModal
} from './styles'
import Banner from '../../Banner'
import Header from '../../Header'
import { useState, useEffect } from 'react'
import { Food, GalleryItem } from '../Home/Index'

// const mock: GalleryItem[] = [
//   {
//     name: 'Pizza Marguerita',
//     type: 'image',
//     url: image3,
//     description:
//       'A clássica Marguerita: molho de tomate suculento,mussarela derretida,manjericão, fresco e um toque de azeite. Sabor e simplicidade!'
//   },
//   {
//     name: 'Pizza Marguerita',
//     type: 'image',
//     url: image3,
//     description:
//       'A clássica Marguerita: molho de tomate suculento,mussarela derretida,manjericão, fresco e um toque de azeite. Sabor e simplicidade!'
//   },
//   {
//     name: 'Pizza Marguerita',
//     type: 'image',
//     url: image3,
//     description:
//       'A clássica Marguerita: molho de tomate suculento,mussarela derretida,manjericão, fresco e um toque de azeite. Sabor e simplicidade!'
//   },
//   {
//     name: 'Pizza Marguerita',
//     type: 'image',
//     url: image3,
//     description:
//       'A clássica Marguerita: molho de tomate suculento,mussarela derretida,manjericão, fresco e um toque de azeite. Sabor e simplicidade!'
//   },
//   {
//     name: 'Pizza Marguerita',
//     type: 'image',
//     url: image3,
//     description:
//       'A clássica Marguerita: molho de tomate suculento,mussarela derretida,manjericão, fresco e um toque de azeite. Sabor e simplicidade!'
//   },
//   {
//     name: 'Pizza Marguerita',
//     type: 'image',
//     url: image3,
//     description:
//       'A clássica Marguerita: molho de tomate suculento,mussarela derretida,manjericão, fresco e um toque de azeite. Sabor e simplicidade!'
//   }
// ]
const Profile = () => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)

  const [alimentos, setAlimentos] = useState<Food[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setAlimentos(res))
  }, [])

  return (
    <>
      <Header
        dimension="small"
        description="hidden"
        product="normal"
        restaurant="normal"
        img="space-between"
      />
      <ContainerProfile>
        <Banner />
        <div className="container">
          <ListItem>
            {alimentos.map((alimentos) => (
              <Item key={alimentos.cardapio.id}>
                <img
                  src={alimentos.cardapio.foto}
                  alt={alimentos.cardapio.nome}
                />
                <div>
                  <Titulo>{alimentos.cardapio.nome}</Titulo>
                  <Descricao>{alimentos.cardapio.descricao}</Descricao>
                  <Botao onClick={() => setModalEstaAberta(true)}>
                    Adicionar ao carrinho
                  </Botao>
                </div>
              </Item>
            ))}
          </ListItem>
        </div>
      </ContainerProfile>
      <Modal className={modalEstaAberta ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
              alt="Fechar"
              onClick={() => setModalEstaAberta(false)}
            />
          </header>

          <ContainerSection>
            <ContainerImage>
              <img src={image3} alt="" />
            </ContainerImage>
            <ContainerInfo>
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <ButtonModal>Adicionar ao carrinho - R$ 60,90</ButtonModal>
            </ContainerInfo>
          </ContainerSection>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberta(false)}
        ></div>
      </Modal>
    </>
  )
}

export default Profile
