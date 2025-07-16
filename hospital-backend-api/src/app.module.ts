import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM)],
})
export class AppModule {}
