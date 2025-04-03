import { Food } from '../pages/Home/Index'
import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => {
  const getFoodTags = (food: Food) => {
    const tags = []

    if (food.tipo) {
      tags.push(food.tipo)
    }
    if (food.destacado) {
      tags.push(food.destacado)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <Product
              key={food.id}
              avaliation={food.avaliacao}
              description={food.descricao}
              title={food.titulo}
              image={food.capa}
              infos={getFoodTags(food)}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
