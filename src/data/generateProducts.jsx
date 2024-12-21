import Chance from 'chance'

const chance = new Chance()

const colors = ['black', 'white', 'red', 'yellow', 'purple']
const categories = [
  'T-shirt',
  'Jewelry',
  'Suit',
  'Pants',
  'Dress',
  'Skirt',
  'Shoes',
  'Sweater',
  'Bag',
  'Shorts',
]

const imageUrls = [
  'public/images/pic1.jpg',
  'public/images/pic2.jpg',
  'public/images/pic3.jpg',
  'public/images/pic4.jpg',
  'public/images/pic5.jpg',
  'public/images/pic6.jpg',
  'public/images/pic7.jpg',
  'public/images/pic8.jpg',
  'public/images/pic9.jpg',
  'public/images/pic10.jpg',
  'public/images/pic11.jpg',
  'public/images/pic12.jpg',
];

const generateProducts = (numProducts) => {
  const products = []

  Array.from({ length: numProducts }).forEach(() => {
    const product = {
      id: chance.guid(),
      name: chance.word(),
      description: chance.sentence({ words: 5 }),
      color: chance.pickone(colors),
      category: chance.pickone(categories),
      price: chance.integer({ min: 10, max: 9999 }),
      rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
      imageUrl: chance.pickone(imageUrls),
    }

    products.push(product)
  })

  return products
}

export default generateProducts
