import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'process';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(+port, ()=>{
    console.log(+port)
  });
  app.useGlobalPipes(new ValidationPipe({whitelist : true}));
}
bootstrap();
