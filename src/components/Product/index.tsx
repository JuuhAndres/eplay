import { Titulo, Descricao, Card, Imagem, Infos, LinkButton } from './styles'
import star from '../../assets/image/Star.png'
import Tag from '../Tag'

type Props = {
  title: string
  image: string
  avaliation: string
  description: string
  infos: string[]
}

const Product = ({ title, description, infos, image, avaliation }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>
      {title}
      <span>
        {avaliation} <img src={star} alt="star" />{' '}
      </span>
    </Titulo>

    <Descricao>{description}</Descricao>
    <LinkButton to="/profile">Saiba Mais</LinkButton>
  </Card>
)

export default Product
