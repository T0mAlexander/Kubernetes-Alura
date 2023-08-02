import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Paciente } from '../pacientes/pacienteEntity'
import { Especialista } from '../especialistas/EspecialistaEntity'

@Entity()
export class Avaliacoes {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt!: Date

  @ManyToOne(() => Especialista, (especialista) => especialista.avaliacoes)
  @JoinColumn({ name: 'especialistaId' }) // Adicionar o JoinColumn para especificar o nome da coluna na tabela
  especialista: Especialista

  @ManyToOne(() => Paciente, (paciente) => paciente.avaliacoes)
  @JoinColumn({ name: 'pacienteId' }) // Adicionar o JoinColumn para especificar o nome da coluna na tabela
  paciente: Paciente

  @Column({ type: 'int' })
  nota: number

  @Column({ nullable: true })
  especialistaId: string

  @Column({ nullable: true })
  pacienteId: number
}
