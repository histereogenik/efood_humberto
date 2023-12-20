class Restaurant {
  id: number
  title: string
  rating: string
  origin: string
  description: string
  image: string
  highlight?: boolean

  constructor(
    id: number,
    title: string,
    rating: string,
    origin: string,
    description: string,
    image: string,
    highlight: boolean
  ) {
    this.id = id
    this.title = title
    this.rating = rating
    this.origin = origin
    this.description = description
    this.image = image
    this.highlight = highlight
  }
}

export default Restaurant
