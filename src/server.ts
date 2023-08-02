import * as dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import rotaPaciente from './pacientes/pacienteRoutes'
import rotaEspecialista from './especialistas/especialistaRoutes'
import rotaPlanoDeSaude from './planosDeSaude/planosDeSaudeRoutes'
import rotaClinica from './clinicas/clinicaRoutes'
import { AppDataSource } from './data-source'
import rotaAvaliacoes from './avaliacoes/avaliacoesRoutes'
import rotaConsulta from './consultas/consultaRoutes'
import { erro } from './apiError/ErrorHandler'

dotenv.config({ path: '.env' })

const app = express()

app.use(express.json())

AppDataSource.initialize()
  .then(() => {
    console.log('Conectado ao MySQL 💾')
  })
  .catch((error) => {
    console.error(error)
  })

rotaPaciente(app)
rotaEspecialista(app)
rotaAvaliacoes(app)
rotaClinica(app)
rotaConsulta(app)
rotaPlanoDeSaude(app)

app.use(erro)

app.listen(process.env.SERVER_PORT, () => { console.log(`Servidor executando na porta ${process.env.SERVER_PORT} 🚀`) }
)

export default app
