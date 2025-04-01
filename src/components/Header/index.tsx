import { Link } from 'react-router-dom'
import fundoHeader from '../../assets/image/fundo-header.png'
import logo from '../../assets/image/logo.png'
import { ImagemFundo } from './styles'

export type Props = {
  dimension: 'big' | 'small'
  description: 'normal' | 'hidden'
  restaurant: 'normal' | 'hidden'
  product: 'normal' | 'hidden'
  img: 'center' | 'space-between'
}
const Header = ({
  dimension = 'big',
  description = 'normal',
  restaurant,
  product,
  img
}: Props) => (
  <ImagemFundo
    dimension={dimension}
    description={description}
    restaurant={restaurant}
    product={product}
    img={img}
    style={{ backgroundImage: `url(${fundoHeader})` }}
  >
    <div>
      <ul>
        {restaurant === 'normal' && (
          <li>
            <Link to={'/restaurante'}>Restaurantes</Link>
          </li>
        )}
        <li>
          <Link to={'/'}>
            <img src={logo} alt={logo} />
          </Link>
        </li>
        {product === 'normal' && (
          <li>
            <Link to={'/carrinho'}>0 produto(s) no carrinho</Link>
          </li>
        )}
      </ul>
    </div>

    <h3>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </h3>
  </ImagemFundo>
)

export default Header
