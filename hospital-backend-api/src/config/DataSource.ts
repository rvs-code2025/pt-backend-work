import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Doctors } from '../entity/doctor.entity';
import { Patients } from '../entity/patient.entity';
import { Users } from '../entity/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Users, Doctors, Patients],
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
});
