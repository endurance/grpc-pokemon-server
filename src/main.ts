import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'pokemon',
      protoPath: path.join(__dirname, 'protos/pokemon.proto'),
    },
  });
  app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
