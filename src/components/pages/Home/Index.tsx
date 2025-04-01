import Food from '../../models/Food'
import ProductsList from '../../ProductsList'
import imagem1 from '../../../assets/image/imagem1.png'
import imagem2 from '../../../assets/image/image2.png'
import Header from '../../Header'
const alimentos: Food[] = [
  {
    id: 1,
    avaliation: '4.9',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imagem1,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    avaliation: '4.6',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem2,
    infos: ['Italiana']
  },
  {
    id: 3,
    avaliation: '4.9',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imagem1,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 4,
    avaliation: '4.6',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem2,
    infos: ['Italiana']
  },
  {
    id: 5,
    avaliation: '4.9',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imagem1,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 6,
    avaliation: '4.6',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem2,
    infos: ['Italiana']
  }
]
const Home = () => (
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

export default Home
