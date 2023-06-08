import bodyParser from 'body-parser'
import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from './inversify.config'
import { handleError } from './middlewares/GlobalErrorHandler'

export const main = () => {
  const server = new InversifyExpressServer(container)
  server.setErrorConfig(handleError)

  const app = server.build()
  app.use(bodyParser.json())

  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
}
