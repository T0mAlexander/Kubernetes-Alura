
import { DataSource } from 'typeorm'
import 'reflect-metadata'
import { Paciente } from './pacientes/pacienteEntity'
import { Endereco } from './enderecos/enderecoEntity'
import { Especialista } from './especialistas/EspecialistaEntity'
import { Avaliacoes } from './avaliacoes/avaliacoesEntity'
import * as dotenv from 'dotenv'
import { Clinica } from './clinicas/clinicaEntity'
import { Consulta } from './consultas/consultaEntity'
dotenv.config({ path: '.env' })

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Paciente, Endereco, Especialista, Avaliacoes, Clinica, Consulta],
  migrations: [],
  subscribers: []
})
