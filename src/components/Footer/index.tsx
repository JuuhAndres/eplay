import logo from '../../assets/image/logo.png'
import { FooterContainer, ContainerUL, DescriptionFooter } from './styles'
import instagram from '../../assets/image/instagram.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'

const Footer = () => (
  <FooterContainer>
    <div>
      <img src={logo} alt="" />

      <ContainerUL>
        <li>
          <a>
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src={twitter} alt="" />
          </a>
        </li>
      </ContainerUL>
    </div>

    <DescriptionFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </DescriptionFooter>
  </FooterContainer>
)
export default Footer
