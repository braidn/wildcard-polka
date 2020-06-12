import "babel-polyfill"
import { endpoints } from '@wildcard-api/client'
import { WildcardEndpoints } from '../src/endpoint'

export const wildcard: WildcardEndpoints = endpoints

(async () => {
  const product = await wildcard.randoProduct()
  const app = document.getElementById('app')
  app.innerHTML = `<p>${product.category}</p>`
})()