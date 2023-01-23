import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    // Adding nestjs validators to global req. and res.
    new ValidationPipe({
      // Just authorize DTO objects
      whitelist: true,
      // If in resquest an object was out DTO type, return error
      forbidNonWhitelisted: true,
      // Transform received object in specify type by your route
      transform: true,
    }),
  );

  await app.listen(3000);
}

bootstrap();
