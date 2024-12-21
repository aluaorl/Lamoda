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
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
  'images/pic6.jpg',
  'images/pic7.jpg',
  'images/pic8.jpg',
  'images/pic9.jpg',
  'images/pic10.jpg',
  'images/pic11.jpg',
  'images/pic12.jpg',
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
