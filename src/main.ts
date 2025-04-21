import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation pipe globally
  app.useGlobalPipes(new ValidationPipe());

  // Configure Swagger
  const appModule = app.get(AppModule); // Get AppModule to call configureSwagger
  appModule.configureSwagger(app);

  await app.listen(3000);
}
bootstrap();
