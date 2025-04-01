import Product from '../Product'

import { Container, List } from './styles'
import Food from '../models/Food'

type Props = {
  foods: Food[]
}
const ProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            avaliation={food.avaliation}
            description={food.description}
            title={food.title}
            image={food.image}
            infos={food.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
