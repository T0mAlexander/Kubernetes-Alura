import { Router } from 'express'
import { planosDeSaudeGet } from './planosDeSaudeController'

export const planosDeSaudeRouter = Router()

planosDeSaudeRouter.get('/', planosDeSaudeGet)

export default (app) => {
  app.use('/planosdesaude', planosDeSaudeRouter)
}
