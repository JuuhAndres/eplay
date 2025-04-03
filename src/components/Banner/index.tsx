import { Imagem } from './styles'
import ImagemProfile from '../../assets/image/imagemProfile.png'
import { useEffect, useState } from 'react'
// import { Food } from '../pages/Home/Index'
import { useParams } from 'react-router-dom'

export type Food = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao?: string
  }
}

const Banner = () => {
  const [food, setFood] = useState<Food>()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [])
  return (
    <Imagem style={{ backgroundImage: `url(${food?.id})` }}>
      <div className="container">
        <div>
          <h3>{food?.tipo}</h3>
          <h1>{food?.titulo}</h1>
        </div>
      </div>
    </Imagem>
  )
}
export default Banner
