import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Doctors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  specialization: string;
}
