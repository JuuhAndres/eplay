import { Imagem } from './styles'
import ImagemProfile from '../../assets/image/imagemProfile.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemProfile})` }}>
    <div className="container">
      <div>
        <h3>Italiana</h3>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </div>
  </Imagem>
)

export default Banner
