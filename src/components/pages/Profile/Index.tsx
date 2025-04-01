import Food from '../../models/Food'
import ProductsList from '../../ProductsList'
import image3 from '../../../assets/image/image3.png'
import { ContainerProfile } from './styles'
import Banner from '../../Banner'
import Header from '../../Header'

const alimentos: Food[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image3,
    avaliation: '4.9',
    infos: ['Italiana']
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image3,
    avaliation: '4.9',
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image3,
    avaliation: '4.9',
    infos: ['Italiana']
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image3,
    avaliation: '4.9',
    infos: ['Italiana']
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image3,
    avaliation: '4.9',
    infos: ['Italiana']
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image3,
    avaliation: '4.9',
    infos: ['Italiana']
  }
]
const Profile = () => (
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
        <ProductsList foods={alimentos} />
      </div>
    </ContainerProfile>
  </>
)

export default Profile
