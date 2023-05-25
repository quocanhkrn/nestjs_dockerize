import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Express from 'express';
import * as dotenv from 'dotenv';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { ValidationPipe } from '@nestjs/common/pipes';
import { BadRequestException } from '@nestjs/common';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(Express.static('public'));
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors = []) => {
        return new BadRequestException('Invalid request!');
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('CAPSTONE NODEJS - PINTEREST PROJECT')
    .setDescription(`By DANG QUOC ANH - NODEJS30`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(8080, () => console.log('Server is starting...'));
}
bootstrap();
