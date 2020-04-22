import { endpoints } from '@wildcard-api/client'

(async () => {
  const status = await endpoints.keepAlive()
  console.log(JSON.parse(status.body))
})()

