import { Router } from 'express'
import { criaConsulta,listaConsultas,buscaConsultaPorId,deletaConsulta } from './consultaController'
import {resolver } from '../apiError/ErrorHandler'

export const consultaRouter = Router()

consultaRouter.post('/', resolver(criaConsulta))
consultaRouter.get('/', resolver(listaConsultas))
consultaRouter.get('/:id', resolver(buscaConsultaPorId))
consultaRouter.delete('/:id', resolver(deletaConsulta))

export default (app) => {
  app.use('/consulta', consultaRouter)
}
