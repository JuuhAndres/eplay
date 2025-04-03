import ProductsList from '../../ProductsList'
import imagem1 from '../../../assets/image/imagem1.png'
import imagem2 from '../../../assets/image/image2.png'
import Header from '../../Header'
import { useEffect, useState } from 'react'

export interface GalleryItem {
  type: 'image'
  url: string
  name: string
  description: string
}

export type Food = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto?: string
    preco?: number
    id?: number
    nome?: string
    descricao?: string
    porcao?: string
  }
}

const Home = () => {
  const [alimentos, setAlimentos] = useState<Food[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setAlimentos(res))
  }, [])

  return (
    <>
      <Header
        dimension="big"
        description="normal"
        product="hidden"
        restaurant="hidden"
        img="center"
      />
      <ProductsList foods={alimentos} />
    </>
  )
}

export default Home
