import { resolver } from '../apiError/ErrorHandler'
import { Router } from 'express'
import {
  especialistas,
  criarEspecialista,
  especialistaById,
  atualizarEspecialista,
  apagarEspecialista,
  atualizaContato

} from './especialistaController'

export const especialistaRouter = Router()

especialistaRouter.get('/', resolver(especialistas))
especialistaRouter.post('/', resolver(criarEspecialista))
especialistaRouter.get('/:id', resolver(especialistaById))
especialistaRouter.put('/:id', resolver(atualizarEspecialista))
especialistaRouter.delete('/:id', resolver(apagarEspecialista))
especialistaRouter.patch('/:id', resolver(atualizaContato))

// (res:Response)=>res.status(404).send())

export default (app) => {
  app.use('/especialista', especialistaRouter)
}
