import bodyParser from 'body-parser'
import { InversifyExpressServer } from 'inversify-express-utils'
import 'reflect-metadata'
import { container } from './inversify.config'

const server = new InversifyExpressServer(container)

const app = server.build()
app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
