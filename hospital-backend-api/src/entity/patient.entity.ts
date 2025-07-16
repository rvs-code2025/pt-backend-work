import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  medicalHistory: string;
}
