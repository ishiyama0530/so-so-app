import { HttpError } from '@soso/shared'
import { NextFunction, Request, Response } from 'express'
import { ConfigFunction } from 'inversify-express-utils'
import 'reflect-metadata'

export const handleError: ConfigFunction = (app) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
      switch (err.status) {
        case 400:
          res.status(400).send('Bad request')
          return
        case 401:
          res.status(401).send('Unauthorized')
          return
        case 404:
          res.status(404).send('Not found')
          return
      }
    }
    res.status(500).send('Something broke!')
  })
}
