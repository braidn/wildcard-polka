import wildcard from '@wildcard-api/server'

interface Product {
  id: number
  name: string,
  description: string,
  price: number
}

const products: Array<Product> = [ 
  { id: 1, name: 'Balm', description: '', price: 1555 },
  { id: 2, name: 'Face Masks', description: '', price: 1777 },
  { id: 3, name: 'Moisturizer', description: '', price: 1999 }
]

async function randoProduct(): Promise<Product> {
  const id = Math.floor(Math.random()*3);
  return products.find(products => products.id === id)
}

const endpoints = {
  randoProduct
}

export type WildcardEndpoints = typeof endpoints

Object.assign(wildcard.endpoints, endpoints)
