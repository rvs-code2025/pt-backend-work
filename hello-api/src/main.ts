import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 5000);
}

// Safe, error handling:
bootstrap().catch((err) => {
  console.error('Error starting the application:', err);
});
