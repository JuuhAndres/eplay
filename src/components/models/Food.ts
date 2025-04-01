class Food {
  avaliation: string
  description: string
  title: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    avaliation: string,
    infos: string[]
  ) {
    this.avaliation = avaliation
    this.description = description
    this.id = id
    this.image = image
    this.title = title
    this.infos = infos
  }
}

export default Food
