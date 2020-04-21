const { endpoints } = require('@wildcard-api/server')

endpoints.keepAlive = async function() {
  return { msg: 'We are alive in here' }
}
